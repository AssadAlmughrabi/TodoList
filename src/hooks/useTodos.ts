import { useEffect, useState } from 'react'
import type { Filter, LoadStatus, Todo } from '@/interfaces/todo'
import { fetchTodos } from '@/services/todoService'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [status, setStatus] = useState<LoadStatus>('loading')
  const [filter, setFilter] = useState<Filter>('all')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let ignore = false

    fetchTodos()
      .then((data) => {
        if (ignore) return
        setTodos(data)
        setStatus('success')
      })
      .catch(() => {
        if (ignore) return
        setStatus('error')
      })

    return () => {
      ignore = true
    }
  }, [attempt])

  function retry() {
    setStatus('loading')
    setAttempt((n) => n + 1)
  }

  function addTodo(title: string): boolean {
    const trimmed = title.trim()
    if (!trimmed) return false

    const todo: Todo = { id: crypto.randomUUID(), title: trimmed, done: false }
    setTodos((prev) => [...prev, todo])
    return true
  }

  function toggleTodo(id: string) {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done
    if (filter === 'done') return todo.done
    return true
  })

  const itemsLeft = todos.filter((todo) => !todo.done).length

  return {
    todos: visibleTodos,
    status,
    filter,
    itemsLeft,
    setFilter,
    retry,
    addTodo,
    toggleTodo,
    deleteTodo,
  }
}
