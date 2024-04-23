import { Injectable, inject } from "@angular/core";
import { MedicalRecordApi } from "../api/medicat-record.api";
import { lastValueFrom } from "rxjs";

  /**
   * @author Mihail Petrov
   * @param {*} collection
   * @param {*} key
   * @returns
   */
const $extractAttribute = (collection, key) => {

  if(collection && key in collection ) {
      return collection[key][0].value;
  }

  return "";
}

@Injectable({providedIn: "root"})
export class MedicalRecordService {

  private $api = inject(MedicalRecordApi);

  /**
   *
   */
  public async getMedicalRecords() {

      const reltioCollection: any = await lastValueFrom(this.$api.getAllMedicalRecords());
      const collection: any[]     = [];
      reltioCollection.forEach((record: any) => {

        collection.push({
          uri             : record.uri,
          DateOfVisit     : $extractAttribute(record.attributes, "DateOfVisit")     ,
          NextVisitDate   : $extractAttribute(record.attributes, "NextVisitDate")   ,
          VisitType       : $extractAttribute(record.attributes, "VisitType")       ,
          ReasonForVisit  : $extractAttribute(record.attributes, "ReasonForVisit")  ,
          Notes           : $extractAttribute(record.attributes, "Notes")           ,
          Diagnosis       : $extractAttribute(record.attributes, "Diagnosis")       ,
        });
      });

      return collection;
  }
}
