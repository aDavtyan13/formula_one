import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

export class JsonInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const reqConcatJson = req.clone({url: req.url + '.json'});
    return next.handle(reqConcatJson);
  }
}
