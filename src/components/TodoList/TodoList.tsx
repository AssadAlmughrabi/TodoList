import type { Todo } from '@/interfaces/todo'
import { useLanguage } from '@/hooks/useLanguage'
import { TodoItem } from '@/components/TodoItem/TodoItem'
import './TodoList.css'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  const { t } = useLanguage()

  if (todos.length === 0) {
    return <p className="empty-message">{t.emptyList}</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}
