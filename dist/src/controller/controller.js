"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const contact_model_1 = require("../schema/contact.model");
class Controller {
    showFormCreate(req, res) {
        res.render('create');
    }
    showFormError(req, res) {
        res.render('error');
    }
    async getDataCreate(req, res) {
        try {
            const newContact = new contact_model_1.Contact(req.body);
            const contact = await newContact.save();
            if (contact) {
                res.redirect('/');
            }
            else
                res.render('error');
        }
        catch (err) {
            res.render('error');
        }
    }
    async showFormHome(req, res) {
        try {
            const contacts = await contact_model_1.Contact.find();
            res.render('home', { data: contacts });
        }
        catch (err) {
            res.redirect('/error');
        }
    }
    async showFormUpdate(req, res) {
        try {
            const data = await contact_model_1.Contact.findOne({ _id: req.query.id });
            if (data) {
                res.render('update', { data: data });
            }
            else
                res.redirect('/error');
        }
        catch (err) {
            res.redirect('/error');
        }
    }
    async getDataUpdate(req, res) {
        await contact_model_1.Contact.updateOne({ _id: req.body.id }, { name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone });
        res.redirect('/');
    }
    async delete(req, res) {
        let data = await contact_model_1.Contact.findOne({ _id: req.query.id });
        if (data) {
            await data.remove();
            res.redirect('/');
        }
        else {
            res.redirect('/error');
        }
    }
    async search(req, res) {
        const data = await contact_model_1.Contact.find({ name: new RegExp(`${req.body.keyword}`) });
        if (data) {
            res.render('home', { data: data });
        }
        else {
            let message = {
                message: "Khong ton tai"
            };
            res.render('search', { data: message });
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map