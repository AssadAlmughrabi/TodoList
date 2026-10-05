import { useLanguage } from '@/hooks/useLanguage'
import './Footer.css'

interface FooterProps {
  itemsLeft: number
}

export function Footer({ itemsLeft }: FooterProps) {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <span aria-live="polite">{t.itemsLeft(itemsLeft)}</span>
    </footer>
  )
}
