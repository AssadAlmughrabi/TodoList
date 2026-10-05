import type { Language } from '@/interfaces/language'

export interface Translations {
  appTitle: string
  inputPlaceholder: string
  add: string
  filterAll: string
  filterActive: string
  filterDone: string
  loading: string
  loadError: string
  retry: string
  emptyList: string
  delete: string
  languageLabel: string
  itemsLeft: (count: number) => string
}

const en: Translations = {
  appTitle: 'Todo list',
  inputPlaceholder: 'What needs to be done?',
  add: 'Add',
  filterAll: 'All',
  filterActive: 'Active',
  filterDone: 'Done',
  loading: 'Loading todos…',
  loadError: 'Could not load todos.',
  retry: 'Retry',
  emptyList: 'Nothing to show.',
  delete: 'Delete',
  languageLabel: 'Language',
  itemsLeft: (count) => (count === 1 ? '1 item left' : `${count} items left`),
}

const ar: Translations = {
  appTitle: 'قائمة المهام',
  inputPlaceholder: 'ما الذي تريد إنجازه؟',
  add: 'إضافة',
  filterAll: 'الكل',
  filterActive: 'النشطة',
  filterDone: 'المنجزة',
  loading: 'جارٍ تحميل المهام…',
  loadError: 'تعذّر تحميل المهام.',
  retry: 'إعادة المحاولة',
  emptyList: 'لا يوجد شيء لعرضه.',
  delete: 'حذف',
  languageLabel: 'اللغة',
  itemsLeft: (count) => {
    if (count === 0) return 'لا توجد عناصر متبقية'
    if (count === 1) return 'عنصر واحد متبقٍ'
    if (count === 2) return 'عنصران متبقيان'
    if (count <= 10) return `${count} عناصر متبقية`
    return `${count} عنصرًا متبقيًا`
  },
}

export const translations: Record<Language, Translations> = { en, ar }
