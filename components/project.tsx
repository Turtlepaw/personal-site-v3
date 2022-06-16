import { Center } from "@chakra-ui/react";
import Image from "next/image"

export function Project({ URL, IconURL, Name, Description }: {
    IconURL: string,
    URL: string,
    Name: string,
    Description: string
}) {
    return (
            <a
                href={URL}
                className="text-5xl font-bold text-blurple project"
            >
                <Image src={IconURL} alt="" className="projectImage" width="80px" height="80px" />
                <div>{Name}</div>
                <div className="text-light text-2xl">{Description}</div>
            </a>
    );
}