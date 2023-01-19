import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {API_CONFIG} from "src/app/config/api.config";
import {Taxa} from "../models/taxa";

@Injectable({
  providedIn: "root"
})
export class TaxaService {
  constructor(private http: HttpClient) {}

  findById(idTaxa: any): Observable<Taxa> {
    return this.http.get<Taxa>(`${API_CONFIG.baseUrl}/taxas/${idTaxa}`);
  }

  listarTodasAsTaxas(): Observable<Taxa[]> {
    return this.http.get<Taxa[]>(`${API_CONFIG.baseUrl}/taxas`);
  }

  create(taxa: Taxa): Observable<Taxa> {
    return this.http.post<Taxa>(`${API_CONFIG.baseUrl}/taxas`, taxa);
  }

  update(taxa: Taxa): Observable<Taxa> {
    return this.http.put<Taxa>(
      `${API_CONFIG.baseUrl}/taxas/${taxa.idTaxa}`,
      taxa
    );
  }

  delete(idTaxa: any): Observable<Taxa> {
    return this.http.delete<Taxa>(`${API_CONFIG.baseUrl}/taxas/${idTaxa}`);
  }
}
