import { createPool } from 'mysql2';

//asi creo un objeto de coleccion que lo llamé sql que lo puedo exportar con los datos de la database a elegir
// el await es importante por que sin el seria una promesa saco el await y le pongo el pool para tener multiplses
//conexiones
export const pool = createPool({
    user: 'root', 
    password: '2024hernan',
    host: '',
    port: '3306',
    database:'estacionamientos'

})
