import { useEffect, useState, type ReactNode } from 'react'
import type { Language } from '@/interfaces/language'
import { LanguageContext } from './LanguageContext'
import { translations } from './translations'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return (
    <LanguageContext value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext>
  )
}
