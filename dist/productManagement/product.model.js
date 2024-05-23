"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: { type: String, required: [true, 'type is required'] },
    value: { type: String, required: [true, 'value is required'] },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: [true, 'quantity is required'] },
    inStock: { type: Boolean, required: [true, 'inStock is required'] }
});
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'name is required'] },
    description: { type: String, required: [true, 'descripton is required'] },
    price: { type: Number, required: [true, 'price is required'] },
    category: { type: String, required: [true, 'category is required'] },
    tags: { type: [String], required: [true, 'tags is required'] },
    variants: { type: [variantsSchema], required: [true, 'variants is required'] },
    inventory: { type: inventorySchema, required: [true, 'inventory is required'] }
});
exports.productModel = (0, mongoose_1.model)('product', productSchema);
