import request from 'superagent'
import { singleTask } from '../../client/models.ts'

export async function getToDoList() {
  const response = await request.get('/api/v1/todo')

  return response.body
}

export async function addTask(newTask: singleTask) {
  const response = await request.post('/api/v1/todo').send(newTask)

  return response.body
}

export async function deleteTask(id: number) {
  const response = await request.del(`/api/v1/todo/${id}`)

  return response.body
}
