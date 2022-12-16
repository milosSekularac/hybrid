export class Coin {
    favorite:boolean = false;
    constructor(
        public name: string,
        public code: string,
        public price: number,
        public praviousPrice: number,
        public exchange : string ){}

        positiveChange():boolean {
            return this.price >= this.praviousPrice;
        }
}