import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Condomino} from "../models/condomino";
import {API_CONFIG} from "src/app/config/api.config";

@Injectable({
  providedIn: "root"
})
export class CondominoService {
  constructor(private http: HttpClient) {}

  buscarCondominoPorId(idCondomino: any): Observable<Condomino> {
    return this.http.get<Condomino>(
      `${API_CONFIG.baseUrl}/condominos/${idCondomino}`
    );
  }

  listarCondominos(): Observable<Condomino[]> {
    return this.http.get<Condomino[]>(`${API_CONFIG.baseUrl}/condominos`);
  }

  salvarCondomino(condomino: Condomino): Observable<Condomino> {
    return this.http.post<Condomino>(
      `${API_CONFIG.baseUrl}/condominos`,
      condomino
    );
  }
  alterarCondomino(condomino: Condomino): Observable<Condomino> {
    return this.http.put<Condomino>(
      `${API_CONFIG.baseUrl}/condominos/${condomino.idCondomino}`,
      condomino
    );
  }

  excluirCondomino(idCondomino: any): Observable<Condomino> {
    return this.http.delete<Condomino>(
      `${API_CONFIG.baseUrl}/condominos/${idCondomino}`
    );
  }
}
