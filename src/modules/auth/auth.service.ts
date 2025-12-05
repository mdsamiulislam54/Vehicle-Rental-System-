import { pool } from "../../config/db";
import bcrypt from 'bcrypt'

const signUpServerice = async (playLoad: Record<string, unknown>) => {
    const { name, email, password, phone, role } = playLoad;
    const hashPassword = await bcrypt.hash(password as string, 10);
   
    const user = await pool.query(`INSERT INTO users(name, email, password, phone, role ) VALUES($1,$2,$3,$4,$5) RETURNING id, name, email,  phone, role  `, [name,email, hashPassword, phone, role ]);
    return user

}


export const authService = { signUpServerice }