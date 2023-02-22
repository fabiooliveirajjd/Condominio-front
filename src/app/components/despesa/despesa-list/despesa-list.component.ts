import {Component, ViewChild} from "@angular/core";
import {Despesa} from "../../models/despesa";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {DespesaService} from "../../services/despesa.service";

@Component({
  selector: "app-despesa-list",
  templateUrl: "./despesa-list.component.html",
  styleUrls: ["./despesa-list.component.css"]
})
export class DespesaListComponent {
  ELEMENT_DATA: Despesa[] = [];

  displayedColumns: string[] = [
    "idDespesa",
    "caixaTotal", 
    "valorEntrada",
    "valorSaida",
    "descriminacao",
    "dataPagamento",
    "acoes"
  ];
  dataSource = new MatTableDataSource<Despesa>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: DespesaService) {}

  ngOnInit(): void {
    this.listarTodasAsDespesas();
  }

  listarTodasAsDespesas() {
    this.service.listarTodasAsDespesas().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Despesa>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }
}
