import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

// Get users
export async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM users")
    return rows
}

// Create User
export async function createUser( user_name, user_password) {
    const [result] = await pool.query(`INSERT INTO users (user_name, user_password) VALUES (?, ?)`, [user_name, user_password])
    const id = result.insertId.id
    return getUsers(id)
}

const users = await getUsers()
console.log(users)
