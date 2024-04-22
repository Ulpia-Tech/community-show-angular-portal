import { Component, inject      } from '@angular/core';
import { SearchComponent        } from '../../@shared/search/search.component';
import { CustomerApi            } from '../../@shared/api/customer.api';
import { MedicalRecordApi       } from '../../@shared/api/medicat_record.api';
import { PatientPanelComponent  } from './@components/patient-panel/patient-panel.component';

@Component({
  selector    : 'page-dashboard',
  templateUrl : './dashboard.component.html',
  styleUrl    : './dashboard.component.scss',
  standalone  : true,
  imports     : [SearchComponent, PatientPanelComponent]
})
export class DashboardPage {

  private $customerApi: CustomerApi           = inject(CustomerApi);
  private $medicalRecordApi: MedicalRecordApi = inject(MedicalRecordApi);

  public ngOnInit() {

    this.$customerApi.getAllCustomers().subscribe((aaa) => {

      console.log("All customers");
      console.log(".............");
      console.log(aaa);
    });

    this.$medicalRecordApi.getAllMedicalRecords().subscribe((aaa) => {

      console.log("All customers");
      console.log(".............");
      console.log(aaa);
    });
  }
}
