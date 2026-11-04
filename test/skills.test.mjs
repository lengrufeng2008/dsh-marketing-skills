import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const manifest = JSON.parse(await readFile(join(root, 'manifest.json'), 'utf8'))

test('manifest has unique names and a router', () => {
  const names = manifest.map((item) => item.name)
  assert.equal(new Set(names).size, names.length)
  assert.ok(names.includes('marketing'))
  assert.equal(manifest.length, 9)
})

test('each skill has frontmatter and resolvable references', async () => {
  for (const item of manifest) {
    const dir = join(root, 'skills', item.dir)
    const file = join(dir, 'SKILL.md')
    const text = await readFile(file, 'utf8')
    assert.ok(text.startsWith('---\n'), `${item.name} frontmatter`)
    assert.match(text, new RegExp(`\\nname: ${item.name}\\n`), `${item.name} name`)
    const refs = [...text.matchAll(/references\/[A-Za-z0-9_.-]+/g)].map((m) => m[0])
    for (const ref of refs) await access(join(dir, ref))
  }
})
