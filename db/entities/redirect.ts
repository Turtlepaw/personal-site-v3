import mongoose, { model, Schema } from "mongoose";

const baseSchema = new Schema({
    URL: String,
    redirectionURL: String
});

let modelThing;

if(mongoose.models.r){
    modelThing = model(`r`);
} else {
    modelThing = model(`r`, baseSchema);
}

export const Redirect = modelThing;

export interface ROptions {
    URL: string,
    redirectionURL: string
}