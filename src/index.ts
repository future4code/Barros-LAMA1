import {app} from "./app";
import { userRouter } from "./routes/userRouter";
import { bandRouter } from "./routes/bandRouter";
import { showRouter } from "./routes/showRouter";
import { Request, Response } from "express";


///ENDPOINT USER
app.use("/user", userRouter);

app.use("/band", bandRouter);

app.use("/show", showRouter);

app.get("/",(req:Request, res:Response)=>{
    res.send("FUNCIONANDO AQUI!")
})