import express from 'express'

import { getUsers, createUser} from './database.js'

const app = express()

app.use(express.json())

// Request to get multiple users
app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

// Request to get a single user
app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUsers(id)
    res.send(user)
})

// Request to add a user
app.post("/users", async (req, res) => {
    const { user_name, user_password } = req.body
    const user = await createUser(user_name, user_password)
    res.status(201).send(user)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen(8080, () => {
    console.log('Server is running on port 8080')
  })