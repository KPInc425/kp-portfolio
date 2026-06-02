import { useCallback, useEffect, useMemo, useState } from 'react'
import { defaultProjects, type PortfolioProjectRecord } from '../data/projects'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

type ProjectInput = Omit<PortfolioProjectRecord, 'id'> & { id?: string }

const normalizeProjects = (projects: PortfolioProjectRecord[]) => [...projects].sort((left, right) => left.sortOrder - right.sortOrder)

const mapSupabaseProject = (project: Record<string, unknown>): PortfolioProjectRecord => ({
  id: String(project.id),
  title: String(project.title ?? ''),
  tagline: String(project.tagline ?? ''),
  description: String(project.description ?? ''),
  bullets: Array.isArray(project.bullets) ? project.bullets.map(String) : [],
  imageUrl: String(project.image_url ?? ''),
  projectUrl: String(project.project_url ?? ''),
  techStack: Array.isArray(project.tech_stack) ? project.tech_stack.map(String) : [],
  sortOrder: Number(project.sort_order ?? 0),
  comingSoon: String(project.project_url ?? '').startsWith('#'),
})

export function useProjects() {
  const [projects, setProjects] = useState<PortfolioProjectRecord[]>(normalizeProjects(defaultProjects))
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProjects = async () => {
      if (!isSupabaseConfigured || !supabase) {
        return
      }

      setIsLoading(true)
      const { data, error: loadError } = await supabase
        .from('projects')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true })

      if (loadError) {
        setError(loadError.message)
        setIsLoading(false)
        return
      }

      if (data?.length) {
        setProjects(normalizeProjects(data.map((entry) => mapSupabaseProject(entry as Record<string, unknown>))))
      }

      setIsLoading(false)
    }

    void loadProjects()
  }, [])

  const createProject = useCallback(async (project: ProjectInput) => {
    const nextProject: PortfolioProjectRecord = {
      ...project,
      id: project.id ?? `local-${crypto.randomUUID()}`,
    }

    setProjects((current) => normalizeProjects([...current, nextProject]))

    if (!isSupabaseConfigured || !supabase) {
      return { ok: true as const, mode: 'local-fallback' as const }
    }

    const { error: createError } = await supabase.from('projects').insert({
      id: nextProject.id,
      title: nextProject.title,
      tagline: nextProject.tagline,
      description: nextProject.description,
      bullets: nextProject.bullets,
      image_url: nextProject.imageUrl,
      project_url: nextProject.projectUrl,
      tech_stack: nextProject.techStack ?? [],
      sort_order: nextProject.sortOrder,
      is_active: true,
    })

    if (createError) {
      setError(createError.message)
      return { ok: false as const, mode: 'supabase' as const, error: createError.message }
    }

    return { ok: true as const, mode: 'supabase' as const }
  }, [])

  const updateProject = useCallback(async (projectId: string, updates: Partial<PortfolioProjectRecord>) => {
    setProjects((current) => normalizeProjects(current.map((project) => project.id === projectId ? { ...project, ...updates } : project)))

    if (!isSupabaseConfigured || !supabase) {
      return { ok: true as const, mode: 'local-fallback' as const }
    }

    const { error: updateError } = await supabase.from('projects').update({
      title: updates.title,
      tagline: updates.tagline,
      description: updates.description,
      bullets: updates.bullets,
      image_url: updates.imageUrl,
      project_url: updates.projectUrl,
      tech_stack: updates.techStack,
      sort_order: updates.sortOrder,
    }).eq('id', projectId)

    if (updateError) {
      setError(updateError.message)
      return { ok: false as const, mode: 'supabase' as const, error: updateError.message }
    }

    return { ok: true as const, mode: 'supabase' as const }
  }, [])

  const deleteProject = useCallback(async (projectId: string) => {
    setProjects((current) => current.filter((project) => project.id !== projectId))

    if (!isSupabaseConfigured || !supabase) {
      return { ok: true as const, mode: 'local-fallback' as const }
    }

    const { error: deleteError } = await supabase.from('projects').delete().eq('id', projectId)

    if (deleteError) {
      setError(deleteError.message)
      return { ok: false as const, mode: 'supabase' as const, error: deleteError.message }
    }

    return { ok: true as const, mode: 'supabase' as const }
  }, [])

  return useMemo(() => ({
    projects,
    isLoading,
    error,
    createProject,
    updateProject,
    deleteProject,
    isSupabaseConfigured,
  }), [projects, isLoading, error, createProject, updateProject, deleteProject])
}