"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller/controller");
const router = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const controller = new controller_1.Controller();
const upload = (0, multer_1.default)();
router.get('/create', (req, res) => {
    controller.showFormCreate(req, res);
});
router.get('/error', (req, res) => {
    controller.showFormError(req, res);
});
router.post('/create', upload.none(), (req, res) => {
    controller.getDataCreate(req, res).catch(err => res.redirect('/error'));
});
router.get('/', (req, res) => {
    controller.showFormHome(req, res).catch(err => res.redirect('/error'));
});
router.get('/update', (req, res) => {
    controller.showFormUpdate(req, res).catch(err => res.redirect('/error'));
});
router.post('/update', upload.none(), (req, res) => {
    controller.getDataUpdate(req, res).catch(err => res.redirect('/error'));
});
router.get('/delete', (req, res) => {
    controller.delete(req, res).catch(err => res.redirect('/error'));
});
router.post('/', upload.none(), (req, res) => {
    controller.search(req, res);
});
exports.default = router;
//# sourceMappingURL=contact.router.js.map