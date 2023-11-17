import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import indexRoute from "./Routes/index.cjs"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", indexRoute)

app.listen(process.env.PORT, () => {
    console.log("Server connection success!");
})