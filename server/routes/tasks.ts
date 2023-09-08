import express from 'express'
import * as db from '../db/dbfunctions.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const list = await db.getAllTasks()
    res.json(list)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const newTask = req.body
    const added = await db.addTasks(newTask)

    res.json(added)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteTask(id)

    res.sendStatus(200)
  } catch (err) {
    res.sendStatus(500)
  }
})

export default router
