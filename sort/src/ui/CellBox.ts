import {ActionDefine} from "../event/Action"
import Global from "../Global"

export default class CellBox {
    private dom:JQuery
    private cells: JQuery[] = []
    constructor(dom:string) {
        this.dom = $(dom)
        this.registerEvent()
    }
    private registerEvent(){
        Global.emitter.addListener(ActionDefine.Start,this.onStart.bind(this))
        Global.emitter.addListener(ActionDefine.Swap,this.onSwap.bind(this))
        Global.emitter.addListener(ActionDefine.Compare,this.onCompare.bind(this))
        Global.emitter.addListener(ActionDefine.End,this.omEnd.bind(this))
    }
    private onStart(nums:number[]){
        for (let index in nums) {
            let num = nums[index]
            let cell = $(`<div></div>`).addClass("cell").text(num).css({
                height:num * 5 + "px",
                width:"20px", 
                left: (+index * 30) + "px",
                top: (500 - num * 5) + "px",
            })
            this.cells.push(cell)
            this.dom.append(cell)
        }
        console.log("onStart",nums)
    }
    private onSwap(data){
        console.log("onSwap",data)
    }
    private onCompare(data){
        console.log("onCompare",data)
    }
    private omEnd(data){
        console.log("omEnd",data)
    }
}