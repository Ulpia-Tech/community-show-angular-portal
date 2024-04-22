import { HttpHeaders, HttpInterceptorFn, HttpRequest } from "@angular/common/http";


const isApiProcessable = (httpRequest: HttpRequest<unknown>) => {

  const requestCollection = httpRequest.url.split('/');
  return requestCollection[0] == 'api';
}


/**
 *
 * @param req
 * @param next
 * @returns
 */
export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {

  if(isApiProcessable(req)) {

    const requestCollection = req.url.split('/');
    const url               = (requestCollection.slice(1, requestCollection.length)).join('/');
    const url2              = `api/R1TdiVqlfW0yLwf/${url}`;
    const dupReq            = req.clone({ url: url2 });

    return next(dupReq);
  }

  return next(req);
}

/**
 * @author Mihail Petrov
 * @param req
 * @param next
 * @returns
 */
export const httpAuthorizationInterceptor: HttpInterceptorFn = (req, next) => {

  if(isApiProcessable(req)) {

    const getToken    = localStorage.getItem('access_token');
    const newRequest  = req.clone({
      setHeaders: {
        'Content-Type'  : `application/json`,
        'Authorization' : `Bearer ${getToken}`
      }
    })

    return next(newRequest);
  }

  return next(req);
}
