import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Condomino} from "../model/condomino";
import {API_CONFIG} from "src/app/config/api.config";

@Injectable({
  providedIn: "root"
})
export class CondominoService {
  constructor(private http: HttpClient) {}

  findById(idCondomino: any): Observable<Condomino> {
    return this.http.get<Condomino>(
      `${API_CONFIG.baseUrl}/condominos/${idCondomino}`
    );
  }

  findAll(): Observable<Condomino[]> {
    return this.http.get<Condomino[]>(`${API_CONFIG.baseUrl}/condominos`);
  }

  create(condomino: Condomino): Observable<Condomino> {
    return this.http.post<Condomino>(
      `${API_CONFIG.baseUrl}/condominos`,
      condomino
    );
  }
  update(condomino: Condomino): Observable<Condomino> {
    return this.http.put<Condomino>(
      `${API_CONFIG.baseUrl}/condominos/${condomino.idCondomino}`,
      condomino
    );
  }

  delete(idCondomino: any): Observable<Condomino> {
    return this.http.delete<Condomino>(
      `${API_CONFIG.baseUrl}/condominos/${idCondomino}`
    );
  }
}
