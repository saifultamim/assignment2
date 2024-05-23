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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const product_model_1 = require("../productManagement/product.model");
const order_model_1 = require("./order.model");
const orderCreate = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.create(payLoad);
    if (result) {
        const quantityFinds = yield product_model_1.productModel.find({}, { 'inventory.quantity': 1 });
        const updateQuantity = quantityFinds[0].inventory.quantity - 1;
        if (updateQuantity >= 0) {
            yield product_model_1.productModel.updateMany({}, { $set: { 'inventory.quantity': updateQuantity } });
            if (updateQuantity <= 0) {
                yield product_model_1.productModel.updateMany({}, { $set: { 'inventory.inStock': false } });
            }
        }
    }
    return result;
});
const orderFind = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find({});
    return result;
});
const orderByUserEmail = (searchItem) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find({ email: searchItem });
    return result;
});
exports.orderService = {
    orderCreate,
    orderFind,
    orderByUserEmail,
};
