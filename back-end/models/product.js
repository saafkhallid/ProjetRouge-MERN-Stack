
const mongoose = require('mongoose');
const productShema=new mongoose.Schema({


name:{
    type:String,
    required:[true,'Please entrer product name'],
    trim:true,
    maxLength:[100,'Product name cannot exceed 100 characters']
},
price:{
    type:Number,
    required:[true,'Please entrer price  name'],
    maxLength:[50,'Product name cannot exceed 50 characters'],
    default:0.0,
},
description:{
    type:String,
    required:[true,'Please entrer description name'],
   
},
ratings:{
    type:Number,
    default:0,
    
},
images:[
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        },

}
],
category:{
    type:String,
    required:[true,'Please entrer category for this product'],
    enum:{
        values:[
        'cathegori1',
        'cathegori2',
        'cathegori3',
        'cathegori4',

       
        ],
        message:'Please select correct category for product'
    }
 
},
seller:{
    type:String,
    required:[true,'Please entrer product seller']
},

stock:{
    type:Number,
    required:[true,'Please entrer product stock'],
    maxLength:[5,'Product name cannot exceed 5 characters'],
    default:0

},
numOfreviews:{
    type:Number,
    default:0,
},
review:[
    {
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        },
        
    }
],
createdAt:{
    type:Date,
    default:Date.now
}

})

module.exports=mongoose.model('Product',productShema)
