import en from '@/locales/en'

// ✏️  Import the localized language
import da from '@/locales/da'

// ✏️  Edit these to be the localized language
const locale = da
const localeName = 'da'

// ✏️  Edit your locale's name
describe('Danish translation', () => {
  it('exports a function', () => {
    expect(typeof en).toBe('function')
  })

  it('calls extend on the formulate instance', () => {
    const instance = { extends: jest.fn() }
    en(instance)
    expect(instance.extends.mock.calls.length).toBe(1)
  })

  it('includes all the validation results that english does', () => {
    const instance = { extends: jest.fn() }
    en(instance)
    locale(instance)
    const englishMessages = Object.keys(instance.extends.mock.calls[0][0].locales.en)
    const localizedMessages = Object.keys(instance.extends.mock.calls[1][0].locales[localeName])
    expect(englishMessages).toEqual(localizedMessages)
  })
})
