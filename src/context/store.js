import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {FILTER_RESULTS} from '../utils/constants'

export const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (newTask) => set({tasks: [...get().tasks, newTask]}),
      removeTask: (task_id) => set({tasks: get().tasks.filter((x) => x.task_id !== task_id)}),
      markTaskStatus: (task_id) =>
        set(() => {
          let updatedTasks = [...get().tasks]
          let matchedIndex = updatedTasks.findIndex((x) => x.task_id === task_id)
          updatedTasks[matchedIndex].is_complete = !updatedTasks[matchedIndex].is_complete
          return {tasks: updatedTasks}
        })
    }),
    {
      name: 'tasks' // name of the item in the storage (must be unique)
    }
  )
)

export const useStore = create((set) => ({
  selectedFilter: FILTER_RESULTS.ALL,
  setFilter: (value) => set(() => ({selectedFilter: value})),

  loading: false,
  startLoading: () => set(() => ({loading: true})),
  stopLoading: () => set(() => ({loading: false})),

  notification: {
    open: false,
    message: '',
    severity: 'info'
  },
  showNotification: ({message, severity = 'success'}) =>
    set(() => ({
      notification: {
        open: true,
        message,
        severity
      }
    })),
  hideNotification: () =>
    set(() => ({
      notification: {
        open: false,
        message: ''
      }
    }))
}))
