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
    
    CREATE TABLE students (
        id serial PRIMARY KEY,
        name text NOT NULL,
        email text NOT NULL,
        password text NOT NULL
    );

    CREATE TABLE subjects (
        id serial PRIMARY KEY,
        name text NOT NULL,
        teacherId integer NOT NULL REFERENCES teachers("id") ON DELETE CASCADE
    );

    CREATE TABLE classes (
        id serial PRIMARY KEY,
        name text NOT NULL
    );
    
    CREATE TABLE attendances (
        id serial PRIMARY KEY,
        date date NOT NULL,
        type boolean NOT NULL,
        studentId integer NOT NULL REFERENCES students("id") ON DELETE CASCADE
    );
    
    CREATE TABLE scores (
        id serial PRIMARY KEY,
        score float NOT NULL,
        type text NOT NULL,
        studentId integer NOT NULL REFERENCES students("id") ON DELETE CASCADE,
        subjectId integer NOT NULL REFERENCES subjects("id") ON DELETE CASCADE,
        classId integer NOT NULL REFERENCES classes("id") ON DELETE CASCADE
    );
`

export const init = all([
    pool.query('DROP TABLE teachers CASCADE'),
    pool.query('DROP TABLE students CASCADE'),
    pool.query('DROP TABLE subjects CASCADE'),
    pool.query('DROP TABLE classes CASCADE'),
    pool.query('DROP TABLE attendances CASCADE'),
    pool.query('DROP TABLE scores CASCADE'),
])
    .catch(() => {})
    .then(() => pool.query(createTable))
    .then(() => {
        console.log('Tables created successfully!')
    })
    .catch((err: Error) => {
        console.log(`Error creating tables: ${err.message}`)
    })
