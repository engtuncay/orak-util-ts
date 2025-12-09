import { FiKeybean } from './FiKeybean';

export class FkbList {
    fkbList: Array<FiKeybean> = [];

    constructor() {
    }

    add(fkb:FiKeybean) {
        this.push(fkb);
    }

    push(fkb:FiKeybean) {
        this.fkbList.push(fkb);
    }

    getFkbListInit():Array<FiKeybean>{
        if (this.fkbList == undefined) {
            this.fkbList = [];
        }
        return this.fkbList;
    }

    getArray(): Array<FiKeybean> {
        return this.fkbList;
    }
}