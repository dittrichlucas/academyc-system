import { all } from 'bluebird'
import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432
})

const createTable = `
    -- Teacher table
    CREATE TABLE teachers (
        id serial PRIMARY KEY,
        name text NOT NULL,
        email text NOT NULL,
        password text NOT NULL
    );

    CREATE TABLE matters (
        id serial PRIMARY KEY,
        name text NOT NULL,
        teacherId integer NOT NULL REFERENCES teachers("id") ON DELETE CASCADE
    );

    CREATE TABLE classes (
        id serial PRIMARY KEY,
        name text NOT NULL
    );
`

export const init = all([
    pool.query('DROP TABLE teachers'),
    pool.query('DROP TABLE matters'),
    pool.query('DROP TABLE classes')
])
    .catch(() => {})
    .then(() => pool.query(createTable))
    .then(() => {
        console.log('Tables created successfully!')
    })
    .catch((err: Error) => {
        console.log(`Error creating tables: ${err.message}`)
    })
