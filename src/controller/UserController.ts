import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

const userBusiness = new UserBusiness();
export class UserController {

    public async createUser(req: Request, res: Response) {
        try {
            const { email, name, password, role } = req.body

            const input: UserInputDTO = {
                email,
                name,
                password,
                role
            }


            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        // await BaseDatabase.destroyConnection();
    }

    public async login(req: Request, res: Response) {

        try {

            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const token = await userBusiness.login(loginData);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        // await BaseDatabase.destroyConnection();
    }

}