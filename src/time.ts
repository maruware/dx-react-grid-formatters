import { Settings } from 'luxon'

export const setDefaultLocale = (locale: string) => {
    Settings.defaultLocale = locale
}