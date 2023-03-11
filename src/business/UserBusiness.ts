import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../error/BaseError";

const idGenerator = new IdGenerator();
const hashManager = new HashManager();
const userDatabase = new UserDatabase();
const authenticator = new Authenticator();
export class UserBusiness {

    public async createUser({ email, name, password, role }: UserInputDTO) {
        try {
console.log(email,name,password,role);


            if (!name || !email || !password) {
                throw new CustomError(400, 'Fill in the fields "name", "email" and "password"');
            }
            if (name.length < 3) {
                throw new CustomError(400, 'Very short name');
            }

            if (password.length <= 6) {
                throw new CustomError(400, 'Invalid password');
            }
            if (!email.includes("@")) {
                throw new CustomError(400, "Invalid email address");
            }

            const id = idGenerator.generate();

            const hashPassword = await hashManager.hashGenerator(password);

            await userDatabase.createUser(
                id,
                email,
                name,
                password = hashPassword,
                role
            );

            const accessToken = authenticator.generateToken({ id, role: role });

            return accessToken;

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    // async getUserByEmail(user: LoginInputDTO) {

    //     const userDatabase = new UserDatabase();
    //     const userFromDB = await userDatabase.getUserByEmail(user.email);

    //     const hashManager = new HashManager();
    //     const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

    //     const authenticator = new Authenticator();
    //     const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

    //     if (!hashCompare) {
    //         throw new Error("Invalid Password!");
    //     }

    //     return accessToken;
    // }
}