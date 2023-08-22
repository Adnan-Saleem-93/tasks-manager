import React, {useCallback, useMemo, useState} from 'react'
import InputFieldWithButton from '../../molecules/InputFieldWithButton/index.jsx'
import TableComponent from '../../organisms/Table/index.jsx'
import GenericTemplate from '../../templates/GenericTemplate'
import {Grid} from '@mui/material'
import {Colors, FILTER_RESULTS} from '../../../utils/constants.js'
import {Delete, Done} from '@mui/icons-material'
import {createColumnHelper} from '@tanstack/react-table'
import ControlledCheckbox from '../../atoms/Checkbox/index.jsx'
import RowActions from '../../molecules/RowActions/Index.jsx'
import {useStore, useTaskStore} from '../../../context/store.js'
import {generateRandonString} from '../../../utils/helper-methods.js'

const columnHelper = createColumnHelper()

const TasksPage = () => {
  //#region zustand store hooks
  const {tasks, addTask, markTaskStatus, removeTask} = useTaskStore((state) => state)
  const {selectedFilter, setFilter, startLoading, showNotification, stopLoading} = useStore(
    (state) => state
  )
  //#endregion

  //#region state hooks
  const [task, setTask] = useState({value: '', error: null})
  //#endregion

  // get filtered tasks everytime selected filter changes
  const filteredTasks = useMemo(() => {
    if (selectedFilter === FILTER_RESULTS.COMPLETE)
      return tasks.filter((x) => x.is_complete === true)
    else if (selectedFilter === FILTER_RESULTS.PENDING)
      return tasks.filter((x) => x.is_complete === false)
    else return tasks
  }, [selectedFilter, tasks])

  //#region methods
  const handleChange = useCallback(({target: {value}}) => {
    setTask({...task, value, error: value ? null : 'Task Description is required.!'})
  }, [])

  const addNewTask = useCallback(() => {
    try {
      if (!task.value) {
        setTask({...task, error: 'Task Description is required.!'})
        return
      }
      startLoading()
      addTask({task_id: generateRandonString(), description: task.value, is_complete: false}) // dispatch action to add new task
      showNotification({message: 'Task Added Successfully', severity: 'info'})

      setTask({...task, value: '', error: null}) // reset task field value and error
    } catch (error) {
      showNotification({message: error.message || 'Failed to Add Task', severity: 'error'})
    } finally {
      setTimeout(() => {
        stopLoading()
      }, [1000])
    }
  }, [task.value])

  const removeTaskHandler = useCallback((task_id) => {
    try {
      startLoading()
      removeTask(task_id) // dispatch action to remove new task
      showNotification({message: 'Task Removed Successfully', severity: 'success'})
    } catch (error) {
      showNotification({message: error.message || 'Failed to remove task', severity: 'error'})
    } finally {
      setTimeout(() => {
        stopLoading()
      }, [1000])
    }
  }, [])
  //#endregion

  //#region constant variables
  const columns = [
    columnHelper.accessor('checkbox', {
      header: () => null,
      cell: (info) => {
        return (
          <ControlledCheckbox
            isChecked={info.row.original.is_complete}
            customAction={() => markTaskStatus(info.row.original.task_id)}
          />
        )
      }
    }),
    columnHelper.accessor(() => 'description', {
      id: 'description',
      cell: (info) => {
        return info.row.original.description
      },
      header: () => 'Description'
    }),
    columnHelper.accessor('is_complete', {
      header: () => 'Status',
      cell: (info) =>
        info.row.original.is_complete ? (
          <span style={{color: Colors.PRIMARY, fontWeight: 700}}>
            <Done />
          </span>
        ) : (
          <span style={{color: Colors.ERROR, fontWeight: 700}}>Pending</span>
        )
    }),
    columnHelper.accessor('actions', {
      header: () => 'Actions',
      cell: (info) => {
        let updatedActions = actions.map((action) => {
          action.onClick = () => removeTaskHandler(info.row.original.task_id)
          return action
        })
        return <RowActions actionsList={updatedActions} />
      }
    })
  ]
  const filters = [
    {text: FILTER_RESULTS.ALL, action: () => setFilter(FILTER_RESULTS.ALL)},
    {text: FILTER_RESULTS.COMPLETE, action: () => setFilter(FILTER_RESULTS.COMPLETE)},
    {text: FILTER_RESULTS.PENDING, action: () => setFilter(FILTER_RESULTS.PENDING)}
  ]
  const actions = [
    {
      icon: <Delete />,
      text: 'Delete',
      color: Colors.ERROR,
      variant: 'text',
      onClick: null
    }
  ]
  //#endregion

  return (
    <GenericTemplate>
      <Grid container mb={1}>
        <Grid item xs={12}>
          <InputFieldWithButton
            value={task.value}
            onChange={handleChange}
            variant="outlined"
            error={task.error}
            inputId="task-field"
            label="Task Description"
            placeholder="Enter Task Here"
            btnText="Add Task"
            btnVariant="contained"
            btnClick={addNewTask}
          />
        </Grid>
      </Grid>
      <TableComponent
        columns={columns}
        data={filteredTasks}
        dataLength={tasks.length}
        filterList={filters}
        noDataText="No Task Yet"
        rowActions={actions}
      />
    </GenericTemplate>
  )
}

export default TasksPage
