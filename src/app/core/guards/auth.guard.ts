import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from '../../user/user.service';
import {IUser} from '../../shared/interfaces';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private userService: UserService,
              private router: Router) {
  }

  //canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // let stream$: Observable<IUser | null>;
    //
    // if (this.userService.currentUser === undefined) {
    //   stream$ = this.userService.getCurrentUserProfile();
    // } else {
    //   stream$ = of(this.userService.currentUser);
    // }
    //
    // return stream$.pipe(
    //   map((user) => {
    //     const isLoggedFromData = childRoute.data.isLogged;
    //     return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
    //     //this.router.navigateByUrl(this.router.url === 'about' ? '/' : this.router.url);
    //   }),
    //   tap((canContinue) => {
    //     if (canContinue) {
    //       return;
    //     }
    //     const url = this.router.url;
    //     this.router.navigateByUrl(url);
    //   }),
    // );

    const isLoggedFromData = childRoute.data.isLogged;

    console.log(`${childRoute.component['name']} RequiredLogged: ${childRoute.data.isLogged}`);
    if (typeof isLoggedFromData === 'boolean' && isLoggedFromData === this.userService.isLogged) {
      return true;
    }
     const url = this.router.url;
    // //console.log(url)
    //this.router.navigateByUrl('/');
    this.router.navigate(['/user/login'], {
      queryParams: {
        return: state.url
      }
    });
    return false;
  }

}
