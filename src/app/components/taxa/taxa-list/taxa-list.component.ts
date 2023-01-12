import {MatTableDataSource} from "@angular/material/table";
import {Component, OnInit, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {TaxaCondominio} from "../../model/taxacondominio";
import {TaxaCondominioService} from "../../services/taxacondominio.service";

@Component({
  selector: "app-taxa-list",
  templateUrl: "./taxa-list.component.html",
  styleUrls: ["./taxa-list.component.css"]
})
export class TaxaListComponent {
  ELEMENT_DATA: TaxaCondominio[] = [];

  displayedColumns: string[] = [
    "idTaxaCondominio",
    "condomino",
    "statusTaxaPagamento",
    "dataPagamento",
    "acoes"
  ];
  dataSource = new MatTableDataSource<TaxaCondominio>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: TaxaCondominioService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<TaxaCondominio>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
