import fs from 'fs'
import path from 'path'

export function getPageContent<T = Record<string, unknown>>(slug: string): T {
  const filePath = path.join(process.cwd(), 'content', `${slug}.json`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw) as T
}
