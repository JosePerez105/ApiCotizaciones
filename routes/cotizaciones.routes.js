import { Router } from "express";
import cotizaciones from "../model/cotizaciones.js";

const router = Router()

//Get
router.get("/", async (req, res) => {
    const cotizacionesFinded = await cotizaciones.find()
    res.status(200).json({
        msg: 'Status 200 - Ok',
        cotizaciones: cotizacionesFinded
    })
});

//GetOne
router.get("/:id", async (req, res) => {
    const cotizacionesFinded = await cotizaciones.findById(req.params.id)
    res.status(200).json({
        msg: 'Status 200 - Ok',
        cotizaciones: cotizacionesFinded
    })
});

//Post
router.post("/", async (req, res) => {
    try {
        const cotizacionesCreated = new cotizaciones(req.body)
        await cotizacionesCreated.save();
        res.status(200).json({
            msg: 'Status 200 - Ok',
            info: 'cotizacion creada correctamente',
            cotizaciones: cotizacionesCreated
        })
    } catch (e) {
        res.status(401).json({error: e})
    }
});

//Update - Put
router.put("/:id", async (req, res) => {
    try {

        const { id } = req.params;
        const cotizacionesBefore = await cotizaciones.findByIdAndUpdate(id, req.body)
        const cotizacionesAfter = await cotizaciones.findById(id)
        res.json({
            msg: 'Compra actualizado con éxito',
            cotizacionesBefore,
            cotizacionesAfter
        });
    } catch (e) {
        res.status(401).json({error: e})
    }

});

//Delete
router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const cotizacionesDeleted = await cotizaciones.findByIdAndDelete(id)
        res.json({
            msg: 'cotizacion borrada con éxito',
            cotizaciones: cotizacionesDeleted
        });
    } catch (e) {
        res.status(401).json({ error: e })
    }
});

export default router