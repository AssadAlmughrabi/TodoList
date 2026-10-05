import type { LoadStatus } from '@/interfaces/todo'
import { useLanguage } from '@/hooks/useLanguage'
import './LoadingError.css'

interface LoadingErrorProps {
  status: LoadStatus
  onRetry: () => void
}

export function LoadingError({ status, onRetry }: LoadingErrorProps) {
  const { t } = useLanguage()

  if (status === 'loading') {
    return (
      <p className="loading-error" role="status">
        {t.loading}
      </p>
    )
  }

  if (status === 'error') {
    return (
      <div className="loading-error" role="alert">
        <p className="error">{t.loadError}</p>
        <button type="button" onClick={onRetry}>
          {t.retry}
        </button>
      </div>
    )
  }

  return null
}
