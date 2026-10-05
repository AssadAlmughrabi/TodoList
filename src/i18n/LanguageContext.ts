import { createContext } from 'react'
import type { Language } from '@/interfaces/language'
import type { Translations } from './translations'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
