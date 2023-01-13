import {Condomino} from "./../../model/condomino";
import {CondominoService} from "./../../services/condomino.service";
import {Component, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TaxaCondominio} from "../../model/taxacondominio";
import {TaxaCondominioService} from "../../services/taxacondominio.service";
@Component({
  selector: "app-taxa-create",
  templateUrl: "./taxa-create.component.html",
  styleUrls: ["./taxa-create.component.css"]
})
export class TaxaCreateComponent {
  taxacondominio: TaxaCondominio = {
    statusTaxaPagamento: "",
    dataPagamento: ""
  };

  condominos: Condomino[] = [];

  condomino: FormControl = new FormControl(null, Validators.required);
  statusTaxaPagamento: FormControl = new FormControl(null, Validators.required);
  dataPagamento: FormControl = new FormControl(null, Validators.required);

  constructor(
    private taxaCondominioService: TaxaCondominioService,
    private condominoService: CondominoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAllCondominos();
  }

  create(): void {
    this.taxaCondominioService
      .create(this.taxacondominio)
      .subscribe((resposta) => {
        alert("TaxaCondominio criado com sucesso");
        this.router.navigate(["/taxas"]);
        console.log();
      });
  }

  findAllCondominos(): void {
    this.condominoService.findAll().subscribe((resposta) => {
      this.condominos = resposta;
    });
  }

  validaCampos(): boolean {
    return (
      this.condomino.valid &&
      this.statusTaxaPagamento.valid &&
      this.dataPagamento.valid
    );
  }
}
