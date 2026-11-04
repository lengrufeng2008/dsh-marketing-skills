import { test } from 'node:test'
import assert from 'node:assert/strict'
import { apply } from '../plugin/index.js'

test('provider lists nine skills and loads copywriting', async () => {
  let provider
  const ctx = {
    skills: {
      registerProvider(create) {
        provider = create({ signal: new AbortController().signal, invalidate() {} })
        return () => {}
      },
    },
  }
  apply(ctx)
  assert.ok(provider, 'provider registered')
  const list = await provider.list({})
  assert.equal(list.length, 9)
  assert.equal(list[0].name, 'marketing')
  const candidate = list.find((item) => item.name === 'copywriting')
  assert.ok(candidate)
  const definition = await provider.get(candidate, {})
  assert.match(definition.content, /^# Copywriting/m)
  assert.ok(definition.content.length > 1000)
  assert.equal(definition.provider, 'dsh-marketing-skills')
})
