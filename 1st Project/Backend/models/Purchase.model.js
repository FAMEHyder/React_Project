import mongoose from "mongoose";

const productPurchaseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    productDetail: {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        images: {
            type: [String]
        },
        category: {
            type: String,
            trim: true
        }
    },
    shippingDetail: {
        RecipientName: {
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        postalCode: {
            type: String
        },
        country: {
            type: String
        },
        phone: {
            type: String
        },
        shippingMethod: {
            type: String,
            enum: ['Standard', 'Express', 'Overnight','by hand'],
            default: 'Standard'
        },
        shippingCost: {
            type: Number
        },
        estimatedDeliveryDate: {
            type: Date
        }
    },
    paymentDetail: {
        paymentMethod: {
            type: String
        },
        cardNumber: {
            type: Number
        },
        CvvCode: {
            type: Number
        },
        cardHolderName: {
            type: String
        },
        expiryDate: {
            type: Date
        }
    }
}, { timestamps: true });

export default mongoose.model('ProductPurchase', productPurchaseSchema);
