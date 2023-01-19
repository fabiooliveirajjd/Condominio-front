import {MatTableDataSource} from "@angular/material/table";
import {Component, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {Condomino} from "../../models/condomino";
import {CondominoService} from "../../services/condomino.service";

@Component({
  selector: "app-condomino-list",
  templateUrl: "./condomino-list.component.html",
  styleUrls: ["./condomino-list.component.css"]
})
export class CondominoListComponent {
  ELEMENT_DATA: Condomino[] = [];

  displayedColumns: string[] = [
    "idCondomino",
    "nome",
    "contato",
    "email",
    "unidade",
    "acoes"
  ];
  dataSource = new MatTableDataSource<Condomino>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: CondominoService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Condomino>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
