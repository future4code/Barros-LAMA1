import { UserInputDTO, LoginInputDTO, UserRole } from "../model/User";
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
            console.log(email, name, password, role);


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

            if (role.toUpperCase() !== UserRole.ADMIN && role.toUpperCase() !== UserRole.NORMAL) {
                throw new CustomError(400, "Invalid NORMAL, ADMIN");
            }

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

    public async login({ email, password }: LoginInputDTO): Promise<string> {
        try {
            if (!email || !password) {
                throw new CustomError(400, 'Fill in the fields "email" and "password"');
            }
            if (!email.includes("@")) {
                throw new CustomError(400, "Invalid email address");
            }

            const user = await userDatabase.getUserByEmail(email)

            if (!user) {
                throw new CustomError(400, "User Not Found")
            }

            const comparePassword: boolean = await hashManager.compare(password, user.password)

            if (!comparePassword) {
                throw new CustomError(400, "Invalid password");
            }

            const token = await authenticator.generateToken({ id: user.id, role: user.role })

            return token;

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}