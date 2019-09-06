import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './spa/components/login/login.component';
import { AlwaysAuthGuard } from './spa/services/AlwaysAuthGuard';
import { ContactListComponent } from './spa/components/contactlist.component';
import { ShowComponent } from './spa/components/show.component';
import { NewContactComponent } from './spa/components/newcontact.component';
import { ServiceComponent } from './spa/components/service.component';


export  const customRoutes: Routes =[
    {path:'',component:LoginComponent,canActivate:[AlwaysAuthGuard]},
    {path:'contacts',component:ContactListComponent},
    {path:'show/:selected',component:ShowComponent},
    {path:'newcontact',component:NewContactComponent},
    {path:'services',component:ServiceComponent},
    {path:'about',loadChildren:'./about/about.module#AboutModule'},
    {path:'**',component:LoginComponent} //catch all= **
];

export const SPArouting = RouterModule.forRoot(customRoutes);