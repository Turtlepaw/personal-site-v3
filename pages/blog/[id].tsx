import { GetServerSideProps, NextPage } from "next";
import { BlogResult, BlogPageManager } from "../../db/db";
import { toHTML } from "@discord-message-components/markdown";

interface BlogProps {
    blog: BlogResult;
}

export default function BlogPage ({ blog }: BlogProps) {
    if(!blog || blog == null){
        return (
            <div className="text-center pt-24">
                <h1 className="text-6xl font-bold text-blurple">Not Found...</h1>
                <p className="text-light text-2xl">The page you&apos;re looking for does not seem to exist!</p>
            </div>
        );
    }

    return (
        <>
            {toHTML(blog.markdown)}
        </>
    );
}

export const getServerSideProps: GetServerSideProps<BlogProps> = async function (ctx) {
    if(ctx.query.id == null || Array.isArray(ctx.query.id)){
        return {
            notFound: true,
            props: {
                blog: null
            }
        }
    }

    //const blog = BlogPageManager.getByTitle(ctx.query.id);

    return {
        props: {
            blog: {
                createdAt: Date.now(),
                markdown: `This **is** a test`,
                title: "a"
            }
        }
    }
}