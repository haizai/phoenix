interface IAction {
    type:string,
    data?:any,
}
function Swap(nums:number[],a:number,b:number):IAction {
    let tem = nums[a]
    nums[a] = nums[b]
    nums[b] = tem
    return {
        type:"Swap",
        data: [a,b],
    }
}
function DoNothing(...indexs):IAction {
    return {
        type:"DoNothing",
        data: indexs
    }
}
function Compare(nums:number[],a:number,b:number):IAction {
    return {
        type:"Compare",
        data: [nums[a]>nums[b],a,b]
    }
}
function End(nums:number[]):IAction {
    return {
        type:"End",
        data:nums
    }
}
function Start():IAction {
    return {
        type:"Start"
    }
}

export {Swap,DoNothing,End,Start,Compare}