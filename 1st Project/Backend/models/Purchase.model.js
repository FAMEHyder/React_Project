// import mongoose from "mongoose";

// const productPurchaseSchema=new mongoose.Schema({
//     userId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"user"
//     },
//     productDetail:{
//         productId:{
//             type:mongoose.Schema.Types.ObjectId,
//             ref:"Product"
//             },
//             name:{
//                 type:String,
//                 trim:true,
                
//             },
//             description:{
//                 type:String,
//                 trim:true,        
//             },
//             images:{
//                 type:[String]
//             },
//             category:{
//                 type:String,
//                 trim:true,
                
//             },
        
       

//     },
//     shippingDetail:{
//         RecipientName:{
//             type:String,
//             // required:true
//         },
//         address:{
//             type:String,
//             // requried:true
//         },
//         city:{
//             type:String,
//             // required:true
//         },
//         postalCode:{
//             type:String,
//             // required:true
//         },
//         country:{
//             type:String,
//         },
//         phone:{
//             type:String,
//             // requried:true
//         },
//         shippingMethod:{
//             type:String,
//             enum:['Standard','Express','Overnight'],
//             default:'Standard'
//         },
//         shippingCost:{
//             type:Number,
//         },
//         estimatedDeliveryDate:{
//             type:Date
//         }
        

//     },
//     paymentDetail:{
//         paymentMethod:{
//             type:String,
//             // requried:true
//         },
//         cardNumber:{
//             type:Number,
//             // max:16,
//             unique:false,
//             default:0
//             // requried:true
//         },
       
//         CvvCode:{
//             type:Number,
//             // min:3,
//             // max:4,
//             // unique:true,
//             // required:true
//             default:0
//         },
//         cardHolderName:{
//             type:String,
//             // required:true,

//         },
//         expiryDate:{
//             type:Date,
//             // requried:true
//         },

//     },
//     // others:{
//     //     currency:{
//     //         type:Number,
//     //         default:'PKR'
//     //     },
//     //     deliveryStatus:{
//     //         type:String,
//     //         enum:['Pending','Completed','Failed','Refused   '],
//     //         default:'Pending'
//     //     },
//     //     paymentDate:{
//     //         type:Date,
//     //         default:Date.now()
//     //     },
//     //     orderDate:{
//     //         type:Date,
//     //         default:Date.now()
//     //     }
        
//     // }
    

// },
// {timestamps:true}
// )

// export default mongoose.model('ProductPurchase',productPurchaseSchema)


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
