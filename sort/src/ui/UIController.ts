import Mission from "../Mission"
import CellBox from "./CellBox"

class UIController {
    static mission:Mission
    static cellBox:CellBox

    static init() {
        this.cellBox = new CellBox("#cellBox")
    }
}