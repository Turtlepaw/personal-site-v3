import mongoose, { model, Schema } from "mongoose";

const baseSchema = new Schema({
    title: String,
    markdown: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

let modelThing;

if(mongoose.models.blogpage){
    modelThing = model(`blogpage`);
} else {
    modelThing = model(`blogpage`, baseSchema);
}

export const Blog = modelThing;

export interface BlogOptions {
    title: string,
    markdown: string,
    createdAt: number
}