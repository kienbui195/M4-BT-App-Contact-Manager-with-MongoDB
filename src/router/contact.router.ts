import express from "express";
import {Controller} from "../controller/controller";
const router = express.Router();
import multer from "multer";

const controller = new Controller();
const upload = multer();

router.get('/create', (req, res) => {
    controller.showFormCreate(req,res);
})

router.get('/error', (req, res) => {
    controller.showFormError(req, res);
})

router.post('/create', upload.none(), (req, res) => {
    controller.getDataCreate(req, res).catch(err => res.redirect('/error'));
})

router.get('/' , (req, res) => {
    controller.showFormHome(req, res).catch(err => res.redirect('/error'))
})

router.get('/update', (req, res) => {
    controller.showFormUpdate(req, res).catch(err => res.redirect('/error'))
})

router.post('/update', upload.none(), (req, res) =>  {
    controller.getDataUpdate(req, res).catch(err => res.redirect('/error'))
})

router.get('/delete', (req, res) => {
    controller.delete(req, res).catch(err => res.redirect('/error'))
})

router.post('/', upload.none(),(req, res) => {
    controller.search(req, res).catch(err => res.redirect('/error'))
})

export default router;