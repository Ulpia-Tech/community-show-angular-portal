import { HttpClient } from "@angular/common/http"
import { inject } from "@angular/core"

export class RequestService {

  private http = inject(HttpClient);

  public tenant() {
    https://{{env}}.reltio.com/reltio/api/{{mdmTenant}}

    // const baseUrl

    return this.http;
  }


}
