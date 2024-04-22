import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordApi {

  private http = inject(HttpClient);

  /**
   * @author Mihail Petrov
   * @returns
   */
  public getAllMedicalRecords() {

    return this.http.post(`api/entities/_search`, {
      "filter": "(equals(type,'configuration/entityTypes/medical_record'))",
    })
  }

  public updateAttribute(attributeUri: string, value: any) {

  }

  public updateEntity(entity: any) {

  }
}
