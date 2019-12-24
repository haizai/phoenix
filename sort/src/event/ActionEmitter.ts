import EventEmitter from "./EventEmitter"
import {ActionDefine} from "./Action"

export default class ActionEmitter extends EventEmitter {
    addListener(event:ActionDefine,handle:Function) {
        super.addListener(event,handle)
    }
    emit(event:ActionDefine,...args) {
        super.emit(event,...args)
    }
    removeListener(event:ActionDefine,handle:Function) {
        super.removeListener(event,handle)
    }
    removeAllListener(event?:ActionDefine) {
        super.removeAllListener(event)
    }
}
