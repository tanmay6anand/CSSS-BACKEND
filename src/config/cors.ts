require('dotenv').config();

export const corsOptions = {
    // origin: process.env.ALLOWED_CLIENTS.split(','),
    // origin: process.env.ALLOWED_CLIENTS,
    origin: "*",
};
