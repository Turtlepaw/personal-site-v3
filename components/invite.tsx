/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export function InviteWidget({ InviteURL }: {
    InviteURL: string
}) {
    return (
        <a href={InviteURL} className="invite">
            <img src={`http://invidget.switchblade.xyz/${InviteURL.replace("https://discord.gg/", "")}`} alt="Discord"/>
        </a>
    );
}