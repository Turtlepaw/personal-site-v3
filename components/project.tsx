import { Center } from "@chakra-ui/react";
import Image from "next/image"

export function Project({ URL, IconURL, Name, Description }: {
    IconURL: string,
    URL: string,
    Name: string,
    Description: string
}) {
    return (
        <Center>
            <div className="h-96 mx-5 w-[28rem] my-5 py-5 border-gray-500 border-2 rounded-lg bg-gray-500 bg-opacity-10 text-lg px-16 pt-2">
                <div className="pt-5">
                    <a
                        href={URL}
                        className="text-5xl font-bold text- bblurple"
                    >
                        <Image src={IconURL} alt="" className="projectImage" width="80px" height="80px" />
                        <div className="hover:underline pb-2">{Name}</div>
                        <Center>
                            <div className="text-light text-2xl max-w-lg">{Description}</div>
                        </Center>
                    </a>
                </div>
            </div>
        </Center>
    );
}