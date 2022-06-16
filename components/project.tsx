import Image from "next/image"

export function Project({ URL, IconURL, Name }: {
    IconURL: string,
    URL: string,
    Name: string
}) {
    return (
        <a
            href={URL}
            className="text-6xl font-bold text-blurple project"
        >
            <Image src={IconURL} alt="" className="projectImage" width="120px" height="120px"/>
            {Name}
        </a>
    );
}