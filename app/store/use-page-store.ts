import { create, createStore } from 'zustand'
import { t_page } from '@prisma/client'
import { produce } from 'immer'

export const usePageStore = create<{
  page?: t_page
  setPage: (page: t_page) => void
}>((set) => ({
  page: undefined,
  setPage: (page: t_page) =>
    set(
      produce((state) => {
        state.page = page
        return state
      }),
    ),
}))
