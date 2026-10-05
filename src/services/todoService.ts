import type { Todo } from '@/interfaces/todo'

const DELAY_MS = 1000
const FAILURE_RATE = 1 / 3

const initialTodos: Todo[] = [
  { id: '1', title: 'Learn React', done: true },
  { id: '2', title: 'Learn Vanilla', done: false },
  { id: '3', title: 'Learn React Native', done: false },
]

export function fetchTodos(): Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < FAILURE_RATE) {
        reject(new Error('Server error'))
      } else {
        resolve(initialTodos.map((todo) => ({ ...todo })))
      }
    }, DELAY_MS)
  })
}
