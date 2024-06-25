import express from 'express'
//importo el archivo de la data base
import {pool} from './db.js'

const app= express()


//despliego en mi servidor basico de node un mensaje 
app.get('/' , (req, res) => {
    res.send('SERVIDOR DANDO RESPUESTA!!')
})

app.get('/ping' , async (req, res) => {
    const result = await pool.query('SELECT "usuario registrado" as RESULT');
    console.log(result)
    res.send('una prueba de respuesta2!!!')
})

app.listen(3000)

console.log('server on port 3000')
