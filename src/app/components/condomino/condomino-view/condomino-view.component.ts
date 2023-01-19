import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";

import {ToastrService} from "ngx-toastr";
import {Condomino} from "../../models/condomino";
import {CondominoService} from "../../services/condomino.service";

@Component({
  selector: "app-condomino-view",
  templateUrl: "./condomino-view.component.html",
  styleUrls: ["./condomino-view.component.css"]
})
export class CondominoViewComponent {
  condomino: Condomino = {
    idCondomino: "",
    nome: "",
    contato: "",
    email: "",
    unidade: ""
  };

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  contato: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  unidade: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: CondominoService,
    private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.condomino.idCondomino =
      this.route.snapshot.paramMap.get("idCondomino");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.condomino.idCondomino).subscribe((resposta) => {
      this.condomino = resposta;
    });
  }
}
