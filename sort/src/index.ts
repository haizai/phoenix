import "./style/index.scss"
import "./style/reset.css"


import Utils from "./Utils"
import {SortType} from "./Sort"

import Global from "./Global"
import UIController from "./ui/UIController"



let globalThis:any = window



import ActionEmitter from "./event/ActionEmitter"

// const emitter = new ActionEmitter()
Global.emitter = new ActionEmitter()


UIController.init()

globalThis.UIController = UIController



