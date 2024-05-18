import { modelSong } from "../models/cancion.model.js"

const getAllSongs = async (req, res) => {
    try {
        const songs = await modelSong.findAll()
        return res.json(songs)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

const createSong = async (req, res) => {
    try {
        const { titulo, artista, tono } = req.body

        if (!titulo || !artista || !tono)
            return res.status(400).json({ ok: false, msg: "Todos los campos obligatorios" })

        const newSong = await modelSong.create({ titulo, artista, tono })
        return res.status(201).json(newSong)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

const removeSong = async (req, res) => {
    try {
        const { id } = req.params
        const song = await modelSong.remove(id)
        return res.json(song)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

const updateSong = async (req, res) => {
    try {
        const { id } = req.params
        const { titulo, artista, tono } = req.body

        if (!titulo || !artista || !tono)
            return res.status(400).json({ ok: false, msg: "Todos los campos obligatorios" })

        const songUpdate = {
            id,
            titulo,
            artista,
            tono
        }
        const song = await modelSong.update(songUpdate)
        return res.json(song)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

export const controllerSong = {
    getAllSongs,
    createSong,
    removeSong,
    updateSong
}