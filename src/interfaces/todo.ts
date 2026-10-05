export interface Todo {
  id: string
  title: string
  done: boolean
}

export type Filter = 'all' | 'active' | 'done'

export type LoadStatus = 'loading' | 'error' | 'success'
