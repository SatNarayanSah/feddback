import mongoose, { Schema, Document } from "mongoose"


export interface Message extends Document {
    content: string;
    crteatedAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    crteatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    VerifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "user name is required"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'please us a valid email address'] //regex is use to make match valid email formate 
    },
    password: {
        type: String,
        required: [true, "Password is required"],

    },
    VerifyCode: {
        type: String,
        required: [true, "Verify code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify Code Expiry is required"],
    },
    isVerified: {
        type: Boolean,
        // required:[true]
        default: false
    },

    isAcceptingMessage: {
        type: Boolean,
        default: false
    },
    messages: [MessageSchema]


})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))
export default UserModel