import {ActivatedRoute, Router} from "@angular/router";
import {Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";

import {ToastrService} from "ngx-toastr";
import {Condomino} from "../../models/condomino";
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
    this.buscarCondominoPorId();
  }

  validaCampos(): boolean {
    return (
      this.nome.valid &&
      this.contato.valid &&
      this.email.valid &&
      this.unidade.valid
    );
  }

  buscarCondominoPorId(): void {
    this.service
      .buscarCondominoPorId(this.condomino.idCondomino)
      .subscribe((resposta) => {
        this.condomino = resposta;
      });
  }
  alterarCondomino(): void {
    this.service.alterarCondomino(this.condomino).subscribe(() => {
      this.toast.success("CONDÔMINO ATUALIZADO COM SUCESSO", "ATUALIZAR");
      this.router.navigate(["/condominos"]);
    });
  }
}
