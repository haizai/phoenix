import {ActionDefine} from "../event/Action"
import Global from "../Global"
import Cell from "./Cell"

export default class CellBox {
    private dom:JQuery
    private cells: Cell[] = []
    constructor(dom:string) {
        this.dom = $(dom)
        this.registerEvent()
    }
    private registerEvent(){
        Global.emitter.addListener(ActionDefine.Start,this.onStart.bind(this))
        Global.emitter.addListener(ActionDefine.Swap,this.onSwap.bind(this))
        Global.emitter.addListener(ActionDefine.Compare,this.onCompare.bind(this))
        Global.emitter.addListener(ActionDefine.End,this.omEnd.bind(this))
        Global.emitter.addListener(ActionDefine.Clear,this.onClear.bind(this))
    }
    private onStart(nums:number[]){
        for (let index in nums) {
            let num = nums[index]
            let cell = new Cell(+index,num)
            this.cells.push(cell)
            this.dom.append(cell.dom)
            cell.render()
        }
        console.log("onStart",nums)
    }
    private onSwap(data:[number,number]){
        let [first,last] = data
        let firstCell = this.getCell(first)
        let lastCell = this.getCell(last)
        firstCell.index = last
        lastCell.index = first
        firstCell.render()
        lastCell.render()
    }
    private onCompare(data:[boolean,number,number]){
        this.cells.forEach(i=>i.compareEnd())
        let [isFirstMax,first,last] = data
        this.getCell(first).compare(isFirstMax)
        this.getCell(last).compare(!isFirstMax)
    }
    private omEnd(data){
        this.cells.forEach(i=>i.compareEnd())
    }
    private onClear(data){
        this.dom.empty()
        this.cells = []
    }
    private getCell(index:number):Cell {
        for (let cell of this.cells) {
            if (cell.index == index) {
                return cell
            }
        }
    }
}