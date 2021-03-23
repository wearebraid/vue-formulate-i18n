import * as locales from '@/locales'

// ✏️  Edit these to be the localized language
const locale = 'uk'

// ✏️  Edit your locale's name
describe('Ukrainian translation', () => {
  it('exports a function', () => {
    expect(typeof locales[locale]).toBe('function')
  })

  it('calls extend on the formulate instance', () => {
    const instance = { extend: jest.fn() }
    locales[locale](instance)
    expect(instance.extend.mock.calls.length).toBe(1)
  })

  it('includes all the validation results that ukrainian does', () => {
    const instance = { extend: jest.fn() }
    locales.uk(instance)
    locales[locale](instance)
    const ukrainianMessages = Object.keys(instance.extend.mock.calls[0][0].locales.uk)
    const localizedMessages = Object.keys(instance.extend.mock.calls[1][0].locales[locale])
    expect(ukrainianMessages).toEqual(localizedMessages)
  })
})
