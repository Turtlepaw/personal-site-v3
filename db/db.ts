import { BlogOptions, Blog } from "./entities/blog";
import { connect } from "mongoose";
import { Redirect, ROptions } from "./entities/redirect";

export type BlogResult = BlogOptions | null;
export type RedirectResult = ROptions | null;

//@ts-expect-error
connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

export class BlogPageManager {
    static async create(options: BlogOptions): Promise<BlogResult> {
        const blog = new Blog(options);
        //@ts-expect-error
        return blog.save();
    }

    static async getAll(): Promise<BlogResult[]> {
        return Blog.find();
    }

    static async getById(id: string): Promise<BlogResult> {
        return Blog.findById(id);
    }

    static async update(id: string, options: BlogOptions): Promise<BlogResult> {
        return Blog.findByIdAndUpdate(id, options, { new: true });
    }

    static async delete(id: string): Promise<BlogResult> {
        return Blog.findByIdAndDelete(id);
    }

    static async getByTitle(title: string): Promise<BlogResult> {
        return Blog.findOne({ title });
    }

    static async updateByTitle(title: string, options: BlogOptions): Promise<BlogResult> {
        return Blog.findOneAndUpdate({ title }, options, { new: true });
    }
}

export class RedirectManager {
    static async create(options: ROptions): Promise<RedirectResult> {
        const redirect = new Redirect(options);
        //@ts-expect-error
        return redirect.save();
    }

    static async getAll(): Promise<RedirectResult[]> {
        return Redirect.find();
    }

    static async getById(id: string): Promise<RedirectResult> {
        return Redirect.findById(id);
    }

    static async update(id: string, options: ROptions): Promise<RedirectResult> {
        return Redirect.findByIdAndUpdate(id, options, { new: true });
    }

    static async delete(id: string): Promise<RedirectResult> {
        return Redirect.findByIdAndDelete(id);
    }

    static async getByTitle(title: string): Promise<RedirectResult> {
        return Redirect.findOne({ title });
    }

    static async updateByTitle(title: string, options: ROptions): Promise<RedirectResult> {
        return Redirect.findOneAndUpdate({ title }, options, { new: true });
    }
}
