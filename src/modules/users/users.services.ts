import { pool } from "../../config/db";

const getAllUsers = async () => {
    const users = await pool.query(`SELECT id,name,email,phone,role FROM users `);

    return users
}
const updateUser = async (payload: Record<string, unknown>, id: any) => {
    const { name, email, phone, role } = payload;

    const updateUser = await pool.query(`
        UPDATE   users
        SET name = $1,email = $2,phone = $3,role = $4 WHERE id = $5 RETURNING *`, [name, email, phone, role, id]);

    return updateUser
}
const deleteUser = async (id: any) => {
   

    const updateUser = await pool.query(`
        DELETE FROM users WHERE id=$1`, [id])

    return updateUser
}

export const userServices = {
    getAllUsers,
    updateUser,
    deleteUser
}