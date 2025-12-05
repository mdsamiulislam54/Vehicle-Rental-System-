import { pool } from "../../config/db";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from "../../config";

const signUpServerice = async (playLoad: Record<string, unknown>) => {
    const { name, email, password, phone, role } = playLoad;
    const hashPassword = await bcrypt.hash(password as string, 10);

    const user = await pool.query(`INSERT INTO users(name, email, password, phone, role ) VALUES($1,$2,$3,$4,$5) RETURNING id, name, email,  phone, role  `, [name, email, hashPassword, phone, role]);
    return user

}

const signin = async (playLoad: Record<string, unknown>) => {

    const { email, password } = playLoad;
    const user = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    const payload = {
        id: user.rows[0].id,
        name: user.rows[0].name,
        role: user.rows[0].role,
        email: user.rows[0].email
    }
    const token = jwt.sign({ payload }, config.jwt_secret as string, {
        expiresIn: "7d"
    })

    return {
        token: token,
        user: user
}
}


export const authService = { signUpServerice, signin }