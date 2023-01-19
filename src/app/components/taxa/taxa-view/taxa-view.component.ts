import {Component, OnInit} from "@angular/core";
import {Taxa} from "../../models/taxa";
import {Condomino} from "../../models/condomino";
import {TaxaService} from "../../services/taxa.service";
import {CondominoService} from "../../services/condomino.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-taxa-view",
  templateUrl: "./taxa-view.component.html",
  styleUrls: ["./taxa-view.component.css"]
})
export class TaxaViewComponent {
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.taxa.idTaxa = this.route.snapshot.paramMap.get("idTaxa");
    this.findById();
    this.findAllCondominos();
  }

  findById(): void {
    this.taxaService.findById(this.taxa.idTaxa).subscribe((resposta) => {
      this.taxa = resposta;
    });
  }

  findAllCondominos(): void {
    this.condominoService.findAll().subscribe((resposta) => {
      this.condominos = resposta;
    });
  }
}
