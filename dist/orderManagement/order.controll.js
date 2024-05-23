"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
//===============orderCreate===============================
const orderCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const { error } = order_validation_1.default.validate(orderData);
        if (error) {
            return res.json({
                success: false,
                message: 'order  is not correct validation',
                data: error.details
            });
        }
        const result = yield order_service_1.orderService.orderCreate(orderData);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
//=========================orderFind==================================
const orderFind = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchItem = req.query.email;
    try {
        if (searchItem) {
            const result = yield order_service_1.orderService.orderByUserEmail(searchItem);
            return res.json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result
            });
        }
        else {
            const result = yield order_service_1.orderService.orderFind();
            res.json({
                success: true,
                message: "Orders fetched successfully!",
                data: result
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.orderController = {
    orderCreate,
    orderFind,
};
