"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envConfig_1 = require("./config/envConfig");
const dbConnection_1 = __importDefault(require("./model/dbConnection"));
const router_1 = __importDefault(require("./routes/router"));
const port = envConfig_1.PORT !== null && envConfig_1.PORT !== void 0 ? envConfig_1.PORT : 8080;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/api', router_1.default);
app.listen(port, () => {
    dbConnection_1.default;
    console.log(`server is running on port ${port}`);
});
