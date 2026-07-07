const pool = require("../config/db");

const Computer = {
    getAll: async () => {
        const result = await pool.query(
            "SELECT * FROM computers ORDER BY id"
        );
        return result.rows;
    },

    getById: async (id) => {
        const result = await pool.query(
            "SELECT * FROM computers WHERE id = $1",
            [id]
        );
        return result.rows[0];
    },

    create: async (data) => {
        const {
            asset_code,
            brand_model,
            cpu,
            ram_gb,
            room,
            status
        } = data;

        const result = await pool.query(
            `INSERT INTO computers
            (asset_code, brand_model, cpu, ram_gb, room, status)
            VALUES ($1,$2,$3,$4,$5,$6)
            RETURNING *`,
            [
                asset_code,
                brand_model,
                cpu,
                ram_gb,
                room,
                status
            ]
        );

        return result.rows[0];
    },

    update: async (id, data) => {
        const {
            asset_code,
            brand_model,
            cpu,
            ram_gb,
            room,
            status
        } = data;

        const result = await pool.query(
            `UPDATE computers SET
            asset_code=$1,
            brand_model=$2,
            cpu=$3,
            ram_gb=$4,
            room=$5,
            status=$6
            WHERE id=$7
            RETURNING *`,
            [
                asset_code,
                brand_model,
                cpu,
                ram_gb,
                room,
                status,
                id
            ]
        );

        return result.rows[0];
    },

    delete: async (id) => {
        await pool.query(
            "DELETE FROM computers WHERE id=$1",
            [id]
        );

        return { message: "Deleted successfully" };
    }
};

module.exports = Computer;