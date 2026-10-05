import type { Language } from '@/interfaces/language'
import { useLanguage } from '@/hooks/useLanguage'
import './LanguageSwitcher.css'

const LANGUAGES: Language[] = ['en', 'ar']

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="language-switcher" role="group" aria-label={t.languageLabel}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          className={lang === language ? 'chip selected' : 'chip'}
          aria-pressed={lang === language}
          onClick={() => setLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
