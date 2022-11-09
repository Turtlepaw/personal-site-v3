declare module '@discord-message-components/markdown' {
    import { ReactNode } from "react";
    export interface toHTMLOptions {
        embed?: boolean;
        escapeHTML?: boolean;
        discordOnly?: boolean;
        discordCallback?: object;
    }
    
    export function toHTML(source: string, options?: object, customParser?: any, customHtmlOutput?: any): ReactNode;
}