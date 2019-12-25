enum ActionDefine {
    Swap,
    DoNothing,
    Compare,
    End,
    Start,
    Clear,
}
interface IAction {
    type:ActionDefine,
    data?:any,
}
function Swap(nums:number[],a:number,b:number):IAction {
    let tem = nums[a]
    nums[a] = nums[b]
    nums[b] = tem
    return {
        type: ActionDefine.Swap,
        data: [a,b],
    }
}
function DoNothing(...indexs):IAction {
    return {
        type: ActionDefine.DoNothing,
        data: indexs
    }
}
function Compare(nums:number[],a:number,b:number):IAction {
    return {
        type: ActionDefine.Compare,
        data: [nums[a]>nums[b],a,b]
    }
}
function End(nums:number[]):IAction {
    return {
        type: ActionDefine.End,
        data:nums
    }
}
function Start(nums:number[]):IAction {
    return {
        type: ActionDefine.Start,
        data:nums
    }
}
function Clear():IAction {
    return {
        type: ActionDefine.Clear,
    }
}

export {Swap,DoNothing,End,Start,Compare,Clear,IAction,ActionDefine}