//Router guard

/*

Intercepting before routing occurs with rules and roles:

The router supports the following kinds of guards:

There are four different types of Guards:
CanActivate
        - Checks to see if a user can visit a route.
CanActivateChild
        - Checks to see if a user can visit a routes children.
CanDeactivate
        -  Checks to see if a user can exit a route.
Resolve
   - Performs route data retrieval before route activation.
   (users Observerable/Promise)
CanLoad
    - Checks to see if a user can route to a module that
     lazy loaded.

In angular 5/6 , new guards are added which are
Useful for start/stop spinner when loading routes/modules or 
measure performance of guards

GuardCheckStart
ChildActivatorStart
ActivationStart
GuardCheckEnd, 
ResolveStart
ActivateEnd
ChildActivateEnd.





$ ng g guard intercept 
    create src\app\intercept.guard.spec.ts
    create src\app\intercept.gurd.ts

    observe intercept.guard.ts code    
*/
import {Session} from './globals';
import {Injectable} from '@angular/core'
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot}
             from "@angular/router";
import {Router} from '@angular/router';

@Injectable({providedIn:'root'})
export class AlwaysAuthGuard implements CanActivate{
      // constructor(private _router:Router){ }   */
  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
    console.log("I am AlwaysAuthGuard"+state);
    //http.get(url?sessionid)
    /*
   if (Session.authenticated ==true)
         this._router.navigate("contacts")
         */
        /*if (role==='admin'){
                this.Router.navigate('admin')
                else
                  return false;
        }
        */
    return true;
  }
}
