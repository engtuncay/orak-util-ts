import {FiCol} from "./FiCol";


export class FicList {
    ficList: Array<FiCol> = [];

    constructor() {
    }

    add(fic:FiCol) {
        this.push(fic);
    }

    push(fic:FiCol) {
        this.ficList.push(fic);
    }

    getFicListInit():Array<FiCol>{
        if (this.ficList == undefined) {
            this.ficList = [];
        }
        return this.ficList;
    }

    getFl() {
        return this.ficList;
    }
}