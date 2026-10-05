import { Footer } from '@/components/Footer/Footer'
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher'
import { LoadingError } from '@/components/LoadingError/LoadingError'
import { TodoFilter } from '@/components/TodoFilter/TodoFilter'
import { TodoForm } from '@/components/TodoForm/TodoForm'
import { TodoList } from '@/components/TodoList/TodoList'
import { useLanguage } from '@/hooks/useLanguage'
import { useTodos } from '@/hooks/useTodos'
import './App.css'

function App() {
  const { t } = useLanguage()
  const { todos, status, filter, itemsLeft, setFilter, retry, addTodo, toggleTodo, deleteTodo } =
    useTodos()

  return (
    <main className="app">
      <header className="app-header">
        <h1>{t.appTitle}</h1>
        <LanguageSwitcher />
      </header>

      {status === 'success' ? (
        <>
          <TodoForm onAdd={addTodo} />
          <TodoFilter value={filter} onChange={setFilter} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
          <Footer itemsLeft={itemsLeft} />
        </>
      ) : (
        <LoadingError status={status} onRetry={retry} />
      )}
    </main>
  )
}

export default App
