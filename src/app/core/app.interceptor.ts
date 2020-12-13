import {Injectable, Provider} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
  HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, finalize, map} from 'rxjs/operators';
import {LoadingDialogService} from '../shared/loading/loading-dialog.service';

// import {ErrorDialogService} from '../shared/errors/error-dialog.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  apiURL = environment.apiURL;
  headers = {
    Authorization: `Bearer hh`,
    'Access-Control-Allow-Origin': '*'
  };

  constructor(private loadingDialogService: LoadingDialogService,
              // private errorDialogService: ErrorDialogService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingDialogService.openDialog();
    if (!req.url.includes('http')) {
      req = req.clone({
        withCredentials: true,
        setHeaders: this.headers,
        url: `${(this.apiURL)}${req.url}`
      });
    }
    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
         // console.log('check event:',event)
          if (event instanceof HttpResponse) {
            //   console.log('event2--->>>', event.body);
          }
          return event;
        }),
        // catchError((error: HttpErrorResponse) => {
        //   console.error("Error from error interceptor", error);
        //   let message = JSON.parse(error.error).join('\n');
        //   console.warn("Error message", message);
        //
        //   this.errorDialogService.openDialog(message ?? error, error.statusText);
        //   return throwError(error);
        // }),
        finalize(() => {
          this.loadingDialogService.hideDialog();
        })
      ) as Observable<HttpEvent<any>>;
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};
