import {Request, Response} from "express";
import {Contact} from "../schema/contact.model";

class Controller {

    showFormCreate(req: Request, res: Response) {
        res.render('create');
    }

    showFormError(req: Request, res: Response) {
        res.render('error');
    }

    async getDataCreate(req: Request, res: Response) {
        try {
            const newContact = new Contact(req.body);
            const contact = await newContact.save();
            if (contact) {
                res.redirect('/');
            } else res.render('error');
        } catch (err) {
            res.render('error');
        }
    }

    async showFormHome(req: Request, res: Response) {
        try {
            const contacts = await Contact.find();
            res.render('home' , {data: contacts})
        } catch(err) {
            res.redirect('/error')
        }
    }

    async showFormUpdate(req: Request, res: Response) {
        try {
            const data = await Contact.findOne({_id: req.query.id})
            if (data) {
                res.render('update' , {data: data});
            } else res.redirect('/error')
        } catch (err) {
            res.redirect('/error')
        }


    }

    async getDataUpdate(req: Request, res: Response) {
        await Contact.updateOne({_id: req.body.id },
            {name: req.body.name,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone})
        res.redirect('/');
    }

    async delete(req: Request, res: Response) {
        let data = await Contact.findOne({_id: req.query.id});
        if (data) {
            await data.remove();
            res.redirect('/')
        } else {
            res.redirect('/error');
        }
    }

    async search(req: Request, res: Response) {
        const data = await Contact.find({name: new RegExp(`${req.body.keyword}`)} )
        if (data) {
            res.render('home' , {data: data})
        } else {
            let message = {
                message: "Khong ton tai"
            }
            res.render('search' , {data: message})
        }
    }
}

export {Controller}