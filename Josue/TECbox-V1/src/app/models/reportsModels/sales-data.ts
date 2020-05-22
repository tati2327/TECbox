export class SalesData {
    number: number;
    timesPurchased: number;
    product: string;
    date: string;

    constructor(id, timesPurchased,product, date){
        this.number=id
        this.timesPurchased = timesPurchased;
        this.product=product
        this.date=date
    }

}
