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
exports.productService = void 0;
const product_model_1 = require("./product.model");
const newProductCreate = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(payLoad);
    return result;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.find({});
    return result;
});
const specificProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findById(id);
    return result;
});
const specificUpdateProduct = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.updateOne({ _id: id }, { $set: productData });
    if (result.acknowledged) {
        const specificUpdateProductById = yield specificProductById(id);
        return specificUpdateProductById;
    }
    else {
        return 'Product updated is not successfully';
    }
});
const specificDeleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.deleteOne({ _id: id });
    if (result.acknowledged) {
        return null;
    }
    return 'Product deleted is not successfully!';
});
const searchProduct = (searchItem) => __awaiter(void 0, void 0, void 0, function* () {
    const findProduct = searchItem.charAt(0) + searchItem.charAt(1).toUpperCase() + searchItem.slice(2);
    const result = yield product_model_1.productModel.find({ name: { $regex: findProduct } });
    return result;
});
exports.productService = {
    newProductCreate,
    getAllProducts,
    specificProductById,
    specificUpdateProduct,
    specificDeleteProduct,
    searchProduct,
};
