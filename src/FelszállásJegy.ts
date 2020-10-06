import { parse } from "path";
import Felszállás from "./Felszallas";
export default class FelszállásJegy extends Felszállás {
    private _jegyeSzáma: number;

    constructor(sor: string) {
        super(sor);
        this._jegyeSzáma = parseInt(sor.split(" ")[4]);
    }
}
