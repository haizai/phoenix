import Utils from "./Utils"
import {BubbleSort,SelectionSort} from "./Sort"

let globalThis:any = window

globalThis.Utils = Utils

globalThis.BubbleSort = BubbleSort
globalThis.SelectionSort = SelectionSort


function todo(fun) {
    let num = Utils.getRandomNumArg()
    let g = fun(num)
    for (let k of g) {
        console.log(JSON.stringify(k),num.toString())
    }
}

globalThis.todo = todo


