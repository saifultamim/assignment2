"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_router_1 = __importDefault(require("./productManagement/product.router"));
const order_routesr_1 = __importDefault(require("./orderManagement/order.routesr"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/newProductCreate', product_router_1.default);
app.use('/orderManagemnet', order_routesr_1.default);
app.get('/', (req, res) => {
    res.status(200).json({
        data: 'hello world'
    });
});
exports.default = app;
