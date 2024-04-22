import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CustomerApi {

  private http = inject(HttpClient);

  /**
   * @author Mihail Petrov
   * @returns
   */
  public getAllCustomers() {

    return this.http.post(`api/entities/_search`, {
      "filter": "(equals(type,'configuration/entityTypes/Person'))",
    });
  }
}
