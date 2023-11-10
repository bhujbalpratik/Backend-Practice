import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    return res.send("Services")
})

router.get('/1', (req, res) => {
    return res.send("Service 1")
})

router.get('/2', (req, res) => {
    return res.send("Service 2")
})

router.get('/3', (req, res) => {
    return res.send("Service 3")
})

export default router;