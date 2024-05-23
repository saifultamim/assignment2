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
exports.productController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
//======================newProductCreate===========================
const newProductCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const { error } = product_validation_1.default.validate(productData);
        if (error) {
            res.json({
                success: false,
                message: 'Product Data in not correct validation',
                data: error.details
            });
        }
        const result = yield product_service_1.productService.newProductCreate(productData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
//==================getAllProducts==========================================
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchItem = req.query.searchTerm;
    try {
        if (req.query.searchTerm) {
            const result = yield product_service_1.productService.searchProduct(searchItem);
            return res.json({
                success: true,
                message: "Products matching search term 'iphone' fetched successfully!",
                data: result
            });
        }
        else {
            const result = yield product_service_1.productService.getAllProducts();
            res.json({
                success: true,
                message: "Products fetched successfully!",
                data: result
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
//=================================specificProductById============================
const specificProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productService.specificProductById(productId);
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
//===============================specificUpdateProduct============================
const specificUpdateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const result = yield product_service_1.productService.specificUpdateProduct(productId, productData);
        res.json({
            success: true,
            message: "Product updated successfully!",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
//=================================sspecificDeleteProduct============================
const specificDeleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productService.specificDeleteProduct(productId);
        res.json({
            success: true,
            message: "Product deleted successfully!",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.productController = {
    newProductCreate,
    getAllProducts,
    specificProductById,
    specificUpdateProduct,
    specificDeleteProduct,
};
