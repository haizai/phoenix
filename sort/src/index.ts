import "./style/index.scss"
import "./style/reset.css"


import Utils from "./Utils"
import {SortType} from "./Sort"

import Mission from "./Mission"
import Global from "./Global"

let globalThis:any = window

globalThis.Utils = Utils

globalThis.Mission = Mission

import ActionEmitter from "./event/ActionEmitter"
import CellBox from "./ui/CellBox"

// const emitter = new ActionEmitter()
Global.emitter = new ActionEmitter()



const cellBox = new CellBox("#cellBox")

function todo(fun:SortType) {
    let num = Utils.getRandomNumArg()
    return new Mission(fun,num)
}



globalThis.SortType = SortType
globalThis.todo = todo

globalThis.a = todo(0)


