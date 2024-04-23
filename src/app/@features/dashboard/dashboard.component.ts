import { Component, inject      } from '@angular/core';
import { SearchComponent        } from '../../@shared/search/search.component';
import { CustomerApi            } from '../../@shared/api/customer.api';
import { MedicalRecordApi       } from '../../@shared/api/medicat-record.api';
import { PatientPanelComponent  } from './@components/patient-panel/patient-panel.component';
import { MedicalRecordPanelComponent } from './@components/medical-record-panel/medical-record-panel.component';

import { MedicalRecordService } from '../../@shared/services/medical-record.service';
import { PatientApi } from '../../@shared/api/patient.api';

@Component({
  selector    : 'page-dashboard',
  templateUrl : './dashboard.component.html',
  styleUrl    : './dashboard.component.scss',
  standalone  : true,
  imports     : [SearchComponent, PatientPanelComponent, MedicalRecordPanelComponent]
})
export class DashboardPage {

  private $customerApi: CustomerApi           = inject(CustomerApi);
  private $patientApi: PatientApi           = inject(PatientApi);

  private medicalRecordService: MedicalRecordService = inject(MedicalRecordService);

  public async ngOnInit() {

    this.$patientApi.getAllPatients().subscribe((data) => {

      console.log("All patients");
      console.log(".............");
      console.log(data);
    });

    // this.$customerApi.getAllCustomers().subscribe((aaa) => {

    //   console.log("All customers");
    //   console.log(".............");
    //   console.log(aaa);
    // });

    // //
    // const collection = await this.medicalRecordService.getMedicalRecords();
    // console.log(collection);
  }
}
