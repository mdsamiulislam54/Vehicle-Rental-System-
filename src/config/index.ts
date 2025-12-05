import dotenv from 'dotenv';
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), ".env") })
const config = {
    connectionString: process.env.DB_URL || "",
    Port: process.env.PORT || 8000,
    jwt_secret: process.env.SECRET
}

export default config;