import type { Todo } from '@/interfaces/todo'
import { useLanguage } from '@/hooks/useLanguage'
import './TodoItem.css'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const { t } = useLanguage()

  return (
    <li className={todo.done ? 'todo-item done' : 'todo-item'}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <span className="title">{todo.title}</span>
      </label>
      <button
        className="delete"
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`${t.delete}: ${todo.title}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />
        </svg>
      </button>
    </li>
  )
}
