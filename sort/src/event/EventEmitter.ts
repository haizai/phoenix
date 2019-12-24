interface HandleHash {
    [eventType:string]: Function[]
}

export default class EventEmitter {
    private handles:HandleHash = {}
    addListener(eventType:string | number,handle:Function) {
        if (!this.handles[eventType]) {
            this.handles[eventType] = []
        }
        this.handles[eventType].push(handle)
    }
    emit(eventType:string | number, ...args) {
        if (this.handles[eventType]) {
            for (let handle of this.handles[eventType]) {
                handle.apply(null,args)
            }
        }
    }
    removeListener(eventType:string | number,handle:Function) {
        if (this.handles[eventType]) {
            this.handles[eventType] = this.handles[eventType].filter(a=>a!=handle)
        }
    }
    removeAllListener(eventType?:string | number) {
        if (eventType) {
            delete this.handles[eventType]
        } else {
            this.handles = {}
        }
    }
}