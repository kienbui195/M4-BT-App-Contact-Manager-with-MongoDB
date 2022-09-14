import { Request, Response } from "express";
declare class Controller {
    showFormCreate(req: Request, res: Response): void;
    showFormError(req: Request, res: Response): void;
    getDataCreate(req: Request, res: Response): Promise<void>;
    showFormHome(req: Request, res: Response): Promise<void>;
    showFormUpdate(req: Request, res: Response): Promise<void>;
    getDataUpdate(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    search(req: Request, res: Response): Promise<void>;
}
export { Controller };
