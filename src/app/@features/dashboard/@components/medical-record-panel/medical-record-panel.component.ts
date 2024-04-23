import { Component, OnInit } from '@angular/core';

@Component({
  selector    : 'medical-record-panel',
  templateUrl : './medical-record-panel.component.html',
  styleUrls   : ['./medical-record-panel.component.scss'],
  standalone  : true
})
export class MedicalRecordPanelComponent {

  public collection = [
    {
      id          : "SHGDHVHSdgavcxdgsd",
      status      : "active"            ,

      patientName :  "Sharo"            ,
      patientId   : "ZYX"               ,
      ownerName   : "Mihail Petrov"     ,
      ownerId     : "XYZ"               ,
      sevirity    : "normal"            ,
      type        : "checkup"
    },

    {
      id          : "SHGDHVHSdgavcxdgsd",
      status      : "active"            ,

      patientName :  "Maro"             ,
      patientId   : "ZYX"               ,
      ownerName   : "Mihail Petrov"     ,
      ownerId     : "XYZ"               ,
      sevirity    : "normal"            ,
      type        : "checkup"
    },

    {
      id          : "SHGDHVHSdgavcxdgsd",
      status      : "closed"            ,

      patientName : "Garo"              ,
      patientId   : "ZYX"               ,
      ownerName   : "Mihail Petrov"     ,
      ownerId     : "XYZ"               ,
      sevirity    : "normal"            ,
      type        : "checkup"
    }
  ];

}
