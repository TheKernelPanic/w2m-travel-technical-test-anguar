import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {LoaderStateService} from "@services/loader-state.service";
import {catchError, tap, Observable, throwError} from "rxjs";

@Injectable()
export class HttpRequestLoaderInterceptor implements HttpInterceptor {

  public constructor(
    private loaderStateService: LoaderStateService
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderStateService.setLoaderState(true, request.url);

    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.loaderStateService.setLoaderState(false, request.url);
        return throwError(() => error);
      }))
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loaderStateService.setLoaderState(false, request.url);
        }
      }));
  }
}
