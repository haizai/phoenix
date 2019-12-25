import Mission from "../Mission"
import CellBox from "./CellBox"
import Utils from "../Utils"

import {SortType} from "../Sort"

export default class UIController {
    static mission:Mission
    static cellBox:CellBox
    static nums:number[]

    static sortNameList = {
        [SortType.BubbleSort]: "冒泡排序",
        [SortType.SelectionSort]: "选择排序",
    }

    static init() {
        this.cellBox = new CellBox("#cellBox")
        this.nums = Utils.getRandomNumArg()
        for (let key in this.sortNameList) {
            let btn = $("<button></button>").addClass("btn").attr("id","sort-" + key).text(this.sortNameList[key])
            $("#sortBtns").append(btn)
        }

        this.registerEvents()

    }
    static registerEvents(){
        $("#sortBtns").children().each((idx,btn)=>{
            $(btn).click(()=>{
                let sortType = parseInt($(btn).attr("id").replace("sort-",""))
                if (this.mission) {
                    this.mission.clear()
                }
                this.mission = new Mission(sortType,JSON.parse(JSON.stringify(this.nums)))
            })
        })
        $("#doNext").click(()=>{
            if (this.mission) {
                this.mission.doNext()
            }
        })
        $("#doAll").click(()=>{
            if (this.mission) {
                this.mission.doAll()
            }
        })
        $("#play").click(()=>{
            if (this.mission) {
                this.mission.play(100)
            }
        })
        $("#clear").click(()=>{
            if (this.mission) {
                this.mission.clear()
            }
        })
    }
}