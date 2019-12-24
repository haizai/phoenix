import {Swap,DoNothing,Start,End,Compare} from "./event/Action"


// 冒泡
function *BubbleSort(nums:number[]){
    yield Start(nums)
    let comp
    for (let i = nums.length - 1; i >= 1 ; i--) {
        for (let j = 1; j <= i; j++) {
            yield comp = Compare(nums,j,j-1)
            if (!comp.data[0]) {
                yield Swap(nums,j,j-1)
            }
        }
    }
    yield End(nums)
}
// 选择
function *SelectionSort(nums:number[]){
    yield Start(nums)
    let comp, tem
    for (let i = 0; i <= nums.length-1; i++) {
        tem = i
        for (let j = i + 1; j <= nums.length-1; j++) {
            yield comp = Compare(nums,tem,j)
            tem = comp.data[0] ? j : tem
        }
        if (tem != i) {
            yield Swap(nums,tem,i)
        }
    }
    yield End(nums)
}

enum SortType {
    BubbleSort,
    SelectionSort,
}
const Sorts = [
    BubbleSort,
    SelectionSort,
]
export {
    SortType,
    Sorts,
}

