import Utils from "./Utils"
import {Sorts,SortType} from "./Sort"
import {IAction} from "./event/Action"

import Global from "./Global"

export default class Mission {
    private nums:number[] = []
    private sort:Generator<IAction, void, unknown>
    private nowRet:IteratorResult<IAction,void>
    constructor(sortType:SortType, nums:number[]) {
        this.sort = Sorts[sortType](nums)
        this.doNext()
    }
    doNext(){
        this.nowRet = this.sort.next()
        let action = this.nowRet.value as IAction
        if (action) {
            Global.emitter.emit(action.type,action.data)
        }
    }
    doAll(){
        while (!this.nowRet.done) {
            this.doNext()
        }
    }

}