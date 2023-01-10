import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";

import {ToastrService} from "ngx-toastr";
import {Condomino} from "../../model/condomino";
import {CondominoService} from "../../services/condomino.service";

@Component({
  selector: "app-condomino-update",
  templateUrl: "./condomino-update.component.html",
  styleUrls: ["./condomino-update.component.css"]
})
export class CondominoUpdateComponent {
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

  validaCampos(): boolean {
    return (
      this.nome.valid &&
      this.contato.valid &&
      this.email.valid &&
      this.unidade.valid
    );
  }

  findById(): void {
    this.service.findById(this.condomino.idCondomino).subscribe((resposta) => {
      this.condomino = resposta;
    });
  }
  update(): void {
    this.service.update(this.condomino).subscribe(() => {
      this.toast.success("Condomino atualizado com sucesso", "Update");
      this.router.navigate(["/condominos"]);
    });
  }
}
