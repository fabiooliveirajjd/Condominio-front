import {MatTableDataSource} from "@angular/material/table";
import {Component, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {Taxa} from "../../models/taxa";
import {TaxaService} from "../../services/taxa.service";

@Component({
  selector: "app-taxa-list",
  templateUrl: "./taxa-list.component.html",
  styleUrls: ["./taxa-list.component.css"]
})
export class TaxaListComponent {
  ELEMENT_DATA: Taxa[] = [];

  displayedColumns: string[] = [
    "idTaxa",
    "nomeCondomino",
    "unidadeCondomino",
    "statusTaxaPagamento",
    "dataPagamento",
    "valor",
    "acoes"
  ];
  dataSource = new MatTableDataSource<Taxa>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: TaxaService) {}

  ngOnInit(): void {
    this.listarTodasAsTaxas();
  }

  listarTodasAsTaxas() {
    this.service.listarTodasAsTaxas().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Taxa>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
