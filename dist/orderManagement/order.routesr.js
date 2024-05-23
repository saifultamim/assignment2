"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controll_1 = require("./order.controll");
const orderrouter = express_1.default.Router();
orderrouter.post('/api/orders', order_controll_1.orderController.orderCreate);
orderrouter.get('/api/orders', order_controll_1.orderController.orderFind);
exports.default = orderrouter;
