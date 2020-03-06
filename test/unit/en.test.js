import * as locales from '@/locales'

// ✏️  Edit these to be the localized language
const locale = 'en'

// ✏️  Edit your locale's name
describe('English translation', () => {
  it('exports a function', () => {
    expect(typeof locales[locale]).toBe('function')
  })

  it('calls extend on the formulate instance', () => {
    const instance = { extends: jest.fn() }
    locales[locale](instance)
    expect(instance.extends.mock.calls.length).toBe(1)
  })

  it('includes all the validation results that english does', () => {
    const instance = { extends: jest.fn() }
    locales.en(instance)
    locales[locale](instance)
    const englishMessages = Object.keys(instance.extends.mock.calls[0][0].locales.en)
    const localizedMessages = Object.keys(instance.extends.mock.calls[1][0].locales[locale])
    expect(englishMessages).toEqual(localizedMessages)
  })
})
