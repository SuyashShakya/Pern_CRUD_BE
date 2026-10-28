import {Pool} from 'pg';

const pool = new Pool({
    user: "suyashshakya",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "tododb"
});

export default pool;