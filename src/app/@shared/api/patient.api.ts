import { HttpClient         } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PatientApi {

  private http = inject(HttpClient);

  /**
   * @autjor Mihail Petrov
   * @param username
   * @param password
   * @returns Subscriber
   */
  public getAllPatients() {

    return this.http.post(`api/entities/_search`, {
      "filter": "(equals(type,'configuration/entityTypes/patient'))",
    });
  }
}
