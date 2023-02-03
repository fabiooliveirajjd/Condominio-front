import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {API_CONFIG} from "src/app/config/api.config";
import {Despesa} from "../models/despesa";

@Injectable({
  providedIn: "root"
})
export class DespesaService {
  constructor(private http: HttpClient) {}

  buscarPorId(idDespesa: any): Observable<Despesa> {
    return this.http.get<Despesa>(
      `${API_CONFIG.baseUrl}/despesas/${idDespesa}`
    );
  }

  listarTodasAsDespesas(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(`${API_CONFIG.baseUrl}/despesas`);
  }

  criarDespesa(despesa: Despesa): Observable<Despesa> {
    return this.http.post<Despesa>(`${API_CONFIG.baseUrl}/despesas`, despesa);
  }

  atualizarDespesa(despesa: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(
      `${API_CONFIG.baseUrl}/despesas/${despesa.idDespesa}`,
      despesa
    );
  }

  deletarDespesa(idDespesa: any): Observable<Despesa> {
    return this.http.delete<Despesa>(
      `${API_CONFIG.baseUrl}/despesas/${idDespesa}`
    );
  }
}
