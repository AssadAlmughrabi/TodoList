import { useRef, useState, type FormEvent } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import './TodoForm.css'

interface TodoFormProps {
  onAdd: (title: string) => boolean
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const { t } = useLanguage()
  const [title, setTitle] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (onAdd(title)) {
      setTitle('')
    }
    inputRef.current?.focus()
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder={t.inputPlaceholder}
        aria-label={t.inputPlaceholder}
        autoFocus
      />
      <button type="submit">
        {t.add}
      </button>
    </form>
  )
}
