import{readFileSync,writeFileSync}from'fs'
const p='src/components/sections/Hero.tsx'
let s=readFileSync(p,'utf8')
const oldBlock=`          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, var(--color-base-100), transparent)',
            zIndex: 1, pointerEvents: 'none',
          }} />
          <div style={{
            width: '100%', height: '100%', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem',
            color: 'var(--color-primary)', opacity: 0.3,
          }}>
            {'// Dashboard preview — coming soon'}
          </div>`
const newBlock=`          <img
            src="/src/assets/DashboardExample.jpg"
            alt="Dashboard Preview"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'blur(3px) brightness(0.7)',
              transform: 'scale(1.05)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, var(--color-base-100) 0%, transparent 60%)',
            zIndex: 1, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'color-mix(in oklab, var(--color-primary) 8%, transparent)',
            zIndex: 1, pointerEvents: 'none',
          }} />`
s=s.replace(oldBlock,newBlock)
writeFileSync(p,s)
console.log('Done')
