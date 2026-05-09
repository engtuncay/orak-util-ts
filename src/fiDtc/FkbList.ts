import { Fkb } from './Fkb';

export class FkbList {
    fkbList: Array<Fkb> = [];

    constructor() {
    }

    add(fkb:Fkb) {
        this.push(fkb);
    }

    push(fkb:Fkb) {
        this.fkbList.push(fkb);
    }

    getFkbListInit():Array<Fkb>{
        if (this.fkbList == undefined || this.fkbList == null) {
            this.fkbList = [];
        }
        return this.fkbList;
    }

    getArray(): Array<Fkb> {
        return this.fkbList;
    }
}