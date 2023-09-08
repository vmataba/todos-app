import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // Handle 401 Unauthorized error here
                    // For example, you can display a message or redirect to a login page
                    console.log('Unauthorized error: ', error);

                    // You can also redirect to a login page if desired
                    // this.router.navigate(['/login']);
                }
                return throwError(error);
            })
        );
    }

}