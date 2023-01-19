import {Component, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Taxa} from "../../models/taxa";
import {Condomino} from "../../models/condomino";
import {TaxaService} from "../../services/taxa.service";
import {CondominoService} from "../../services/condomino.service";

@Component({
  selector: "app-taxa-create",
  templateUrl: "./taxa-create.component.html",
  styleUrls: ["./taxa-create.component.css"]
})
export class TaxaCreateComponent implements OnInit {
  taxa: Taxa = {
    nomeCondomino: "",
    unidadeCondomino: "",
    statusTaxaPagamento: "",
    valor: "",
    idCondomino: undefined
  };

  condominos: Condomino[] = [];

  constructor(
    private taxaService: TaxaService,
    private condominoService: CondominoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAllCondominos();
  }

  create(): void {
    this.taxaService.create(this.taxa).subscribe((resposta) => {
      alert("CADASTRADO COM SUCESSO");
      this.router.navigate(["/taxas"]);
      console.log();
    });
  }

  findAllCondominos(): void {
    this.condominoService.findAll().subscribe((resposta) => {
      this.condominos = resposta;
    });
  }
}
