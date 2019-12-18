let globalThis:any = window
const Utils = {
    // 获取随机数字数组
    getRandomNumArg(count:number = 20, min:number = 0,max:number = 100):number[] {
        let ret:number[] = []
        for (let i = 0; i < count; i++) {
            ret.push(Utils.getRandomNum(min,max))
        }
        return ret
    },
    getRandomNum(min:number = 0,max:number = 100):number {
        let rnd = Math.random()
        return Math.floor(min+rnd*(max-min+1))
    },
    getRandomColor():string {
        let colorNum = Utils.getRandomNum(0,0xffffff)
        return "0x" + colorNum.toString(16).toUpperCase().padStart(6,"0")
    },
}
export default Utils