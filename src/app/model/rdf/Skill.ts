import { TTL } from "./TTL";

export class Skill implements TTL{
    code: string;
    name: string;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }

    ToTTL(): string {
        return   "geospacebok:" + this.code + " a dcterms:Subject ;\n" + 
                 "    dc:title \"" + this.name + "\" ;\n" + 
                 ".\n\n";
     }
}