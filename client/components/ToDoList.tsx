import { useQuery } from '@tanstack/react-query'
import { getToDoList, deleteTask } from '../apis/edit-list.tsx'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Task } from '../models.ts'

function ToDoList() {
  const { data: list, isLoading, error } = useQuery(['tasks'], getToDoList)

  const queryClient = useQueryClient()

  const delTask = useMutation(deleteTask, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['tasks'])
    },
  })

  if (error instanceof Error) {
    return (
      <>
        <p>Something went wrong ... {error.message}</p>
      </>
    )
  }

  if (!list || isLoading) {
    return (
      <>
        <p>Loading ...</p>
      </>
    )
  }

  function handleDelete(id: number) {
    delTask.mutate(id)
  }

  return (
    <>
      {list.map((x: Task) => {
        return (
          <ul key={x.id}>
            <li>
              {x.tasks}{' '}
              <button onClick={() => handleDelete(x.id)}>Delete</button>
            </li>
          </ul>
        )
      })}
    </>
  )
}

export default ToDoList
