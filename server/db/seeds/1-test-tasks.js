/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('tasks').del()
  await knex('tasks').insert([
    { id: 1, tasks: 'Make app1', completed: false },
    { id: 2, tasks: 'Make app2', completed: false },
    { id: 3, tasks: 'Make app3', completed: true },
  ])
}
