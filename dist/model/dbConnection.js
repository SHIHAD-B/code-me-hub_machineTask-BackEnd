"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const envConfig_1 = require("../config/envConfig");
exports.default = async () => {
    try {
        await mongoose_1.default.connect(String(envConfig_1.DB_URL).trim(), {
            serverSelectionTimeoutMS: 20000
        });
        console.log('🍃🍃🍃server connected to the database 🍃🍃🍃');
    }
    catch (error) {
        console.log('⛔⛔⛔failed to connect server to  database⛔⛔⛔');
        console.log(error);
        process.exit(1);
    }
};
