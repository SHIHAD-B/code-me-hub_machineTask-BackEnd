"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DB_URL = void 0;
const MONGODB_USERNAME = String(process.env.MONGODB_USERNAME);
const MONGODB_PASSWORD = String(process.env.MONGODB_PASSWORD);
console.log(MONGODB_PASSWORD, MONGODB_USERNAME);
exports.DB_URL = `mongodb+srv://shihadsafe:N6k6uDsmNuh5IHbJ@cluster0.rps7pnn.mongodb.net/codemehub?retryWrites=true&w=majority&appName=Cluster0`;
exports.PORT = Number(process.env.PORT);
