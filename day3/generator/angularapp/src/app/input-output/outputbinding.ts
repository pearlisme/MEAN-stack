import { Component, EventEmitter, Output, Input } from '@angular/core';
//Customer cid,cname,address
// ORM - Customer - Entity  - Hibernate
// Customer (cid,cname,address)

//ODM / DTO/ Model
export interface IPriceQuote {
    stockSymbol: string;
    lastPrice: number;
}

// child component - PriceQuoter
@Component({
    selector: 'price-quoter',
    template: `<h3 class="well text-danger">
                Child PriceQuoterComponent:
                      {{company}}
                      {{price | currency:'USD' }}
               </h3>
               `
})
 export class PriceQuoterComponent {
    @Output()
    lastPriceEvent: EventEmitter<IPriceQuote> = new EventEmitter();
    company: string = "System";
    price: number;
    constructor() {
        window.setInterval(() => {
            let priceQuote: IPriceQuote = {
                stockSymbol: this.company,
                lastPrice: 100 * Math.random(),

              };
            this.price = priceQuote.lastPrice;
            this.lastPriceEvent.emit(priceQuote);//Raise Event
        }, 1000);
    }
}//end of child component

// parent component
@Component({
    selector: 'app-event',
    template: `
    <div class='container'>
        <h1 class='text-success'>
        Parent Component received:
        {{stockSymbol}} - {{price | currency:'USD'}}
        </h1>

   <price-quoter (lastPriceEvent)="priceQuoteHandler($event)" >
       </price-quoter>

    <app-mail  [info]="stockInfo"></app-mail>
    </div>
    `
})
export class OutputComponent {
    stockSymbol: string;
    price: number;
    stockInfo:IPriceQuote ={'stockSymbol':' ','lastPrice':0,};

    priceQuoteHandler(event: IPriceQuote) {
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
        this.stockInfo=
             {'stockSymbol':event.stockSymbol,  'lastPrice':event.lastPrice};
    }
}

// Mail Component (Child)
@Component({
    selector: 'app-mail',
    template: `
    <div class='container'>
        <h3 class='text-primary'>
            Sent notification about {{info.stockSymbol}}
            and Stock value    {{info.lastPrice | currency:'USD'}}  successfully.
        </h3>
    </div>
    `
})
export class  MailComponent {
    @Input()
    info:IPriceQuote;
}//end



