import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthApi {

  private http = inject(HttpClient);

  /**
   * @autjor Mihail Petrov
   * @param username
   * @param password
   * @returns Subscriber
   */
  public signin(username: string, password: string) {

    let body = new URLSearchParams();
    body.set('username'   , username);
    body.set('password'   , password);
    body.set('grant_type' , 'password');

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', 'Basic cmVsdGlvX3VpOm1ha2l0YQ==');

    return this.http.post(`oauth/token`, body.toString(), { headers });
  }
}
