import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')
const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon' }
http.createServer((req, res) => {
  let f = req.url.split('?')[0]; if (f === '/') f = '/index.html'
  const fp = path.join(dist, f)
  if (!fs.existsSync(fp)) { res.statusCode = 404; res.end('Not found'); return }
  const ext = path.extname(fp)
  res.setHeader('Content-Type', mime[ext] || 'application/octet-stream')
  fs.createReadStream(fp).pipe(res)
}).listen(5200, '127.0.0.1', () => console.log('Static on http://127.0.0.1:5200/'))
