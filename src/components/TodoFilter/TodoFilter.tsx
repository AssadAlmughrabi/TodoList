import type { Filter } from '@/interfaces/todo'
import { useLanguage } from '@/hooks/useLanguage'
import './TodoFilter.css'

const FILTERS: Filter[] = ['all', 'active', 'done']

interface TodoFilterProps {
  value: Filter
  onChange: (filter: Filter) => void
}

export function TodoFilter({ value, onChange }: TodoFilterProps) {
  const { t } = useLanguage()

  const labels: Record<Filter, string> = {
    all: t.filterAll,
    active: t.filterActive,
    done: t.filterDone,
  }

  return (
    <div className="todo-filter">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          className={filter === value ? 'chip selected' : 'chip'}
          aria-pressed={filter === value}
          onClick={() => onChange(filter)}
        >
          {labels[filter]}
        </button>
      ))}
    </div>
  )
}
