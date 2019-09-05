import { NgModule } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { TimerComponent } from './timer.component';
import { SMSComponent } from './sms.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockComponent } from './inputbinding';
import { PriceQuoterComponent, OutputComponent, MailComponent } from './outputbinding';

@NgModule({
    declarations:[
        OrderComponent,
        TimerComponent,
        SMSComponent,
        StockComponent,

        PriceQuoterComponent,
        OutputComponent,
        MailComponent
    ],
    imports:[
        FormsModule,
        CommonModule
    ],
    exports:[
            StockComponent,
            OutputComponent
    ]
})
export class IOModule{

}