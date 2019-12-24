export default class Cell {
    public dom:JQuery
    public index:number
    public num:number
    constructor(index:number,num:number) {
        this.dom = $("<div><div>")
        this.index = index
        this.num = num
    }
    render(){
        
    }
}