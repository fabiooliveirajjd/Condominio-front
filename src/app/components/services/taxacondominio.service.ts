import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {API_CONFIG} from "src/app/config/api.config";
import {TaxaCondominio} from "../model/taxacondominio";

@Injectable({
  providedIn: "root"
})
export class TaxaCondominioService {
  constructor(private http: HttpClient) {}

  findById(idTaxaCondominio: any): Observable<TaxaCondominio> {
    return this.http.get<TaxaCondominio>(
      `${API_CONFIG.baseUrl}/taxas/${idTaxaCondominio}`
    );
  }

  findAll(): Observable<TaxaCondominio[]> {
    return this.http.get<TaxaCondominio[]>(`${API_CONFIG.baseUrl}/taxas`);
  }

  create(taxaCondominio: TaxaCondominio): Observable<TaxaCondominio> {
    return this.http.post<TaxaCondominio>(
      `${API_CONFIG.baseUrl}/taxas`,
      taxaCondominio
    );
  }
  update(taxaCondominio: TaxaCondominio): Observable<TaxaCondominio> {
    return this.http.put<TaxaCondominio>(
      `${API_CONFIG.baseUrl}/taxas/${taxaCondominio.idTaxaCondominio}`,
      taxaCondominio
    );
  }

  delete(idTaxaCondominio: any): Observable<TaxaCondominio> {
    return this.http.delete<TaxaCondominio>(
      `${API_CONFIG.baseUrl}/taxas/${idTaxaCondominio}`
    );
  }
}
