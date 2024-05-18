import { pool } from "../database/connection.js";

const findAll = async () => {
    const query = {
        text: 'SELECT * FROM CANCIONES',
    }
    const { rows } = await pool.query(query)
    return rows
}

const create = async ({ titulo, artista, tono }) => {
    const query = {
        text: "INSERT INTO CANCIONES (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING * ",
        values: [titulo, artista, tono]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (id) => {
    const query = {
        text: "DELETE FROM CANCIONES WHERE id = $1 RETURNING *",
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const update = async (song) => {
    const query = {
        text: "UPDATE CANCIONES SET titulo= $1, artista= $2, tono= $3 WHERE id= $4 RETURNING *",
        values: [song.titulo, song.artista, song.tono, song.id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const modelSong = {
    findAll,
    create,
    remove,
    update
}

