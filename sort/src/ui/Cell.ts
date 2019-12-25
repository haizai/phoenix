export default class Cell {
    public dom:JQuery
    public numDom:JQuery
    public index:number
    public num:number
    constructor(index:number,num:number) {
        this.dom = $("<div></div>").addClass("cell")
        this.numDom = $("<p></p>").addClass("num")
        this.dom.append(this.numDom)
        this.index = index
        this.num = num
    }
    render(){
        this.numDom.text(this.num).css({
            top: this.num * 5 + "px",
            width:"20px", 
        })
        this.dom.css({
            height:this.num * 5 + "px",
            width:"20px", 
            left: (+this.index * 30) + "px",
            top: (500 - this.num * 5) + "px",
        })
    }
    compare(isMax:boolean) {
        isMax ? this.dom.addClass("compare-max") : this.dom.addClass("compare-min")
    }
    compareEnd() {
        this.dom.removeClass("compare-max")
        this.dom.removeClass("compare-min")
    }
    clear() {
        this.index = null
        this.num = null
        this.compareEnd()
    }
}