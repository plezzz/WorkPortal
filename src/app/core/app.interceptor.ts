import {Injectable, Provider} from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, EMPTY, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, filter, map} from 'rxjs/operators';

const apiURL = environment.apiURL;

const headers = {
  'Authorization': 'Bearer my-token',
  'Access-Control-Allow-Origin': '*'
};

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('http')) {

      req = req.clone({
        withCredentials: req.url !== 'login',
        setHeaders: headers,
        url: `${apiURL}${req.url}`
      });
    }

    // if (req.url.includes(apiURL)) {
    //   const setHeaders = {};
    //   req = req.clone({ withCredentials: true });
    // }

    return next.handle(req)
      .pipe(
        filter(event => event instanceof HttpResponse && event.url.includes('login')),
        map((event: HttpResponse<any>) =>{
        console.log(event)
          return event
        } )
      )

    //   .pipe(
    //   map(e => {
    //     if (e instanceof HttpResponse && e.url.includes('login')) {
    //       localStorage.setItem('id',JSON.stringify(e.body._id))
    //     }
    //     return e;
    //   }),
    //   catchError(err => {
    //     //console.error(err);
    //     // push this error back into the stream so the other
    //     // error handlers can handle it
    //     return of(err);
    //     // don't push back this error to the stream
    //     // return EMPTY;
    //   })
    // );
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};
