/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('tasks').del()
  await knex('tasks').insert([
    { id: 1, tasks: 'Make app1' },
    { id: 2, tasks: 'Make app2' },
    { id: 3, tasks: 'Make app3' },
  ])
}
