import {Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Condomino} from "../../models/condomino";
import {CondominoService} from "../../services/condomino.service";
@Component({
  selector: "app-condomino-create",
  templateUrl: "./condomino-create.component.html",
  styleUrls: ["./condomino-create.component.css"]
})
export class CondominoCreateComponent {
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
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  validaCampos(): boolean {
    return (
      this.nome.valid &&
      this.contato.valid &&
      this.email.valid &&
      this.unidade.valid
    );
  }

  create(): void {
    this.service.create(this.condomino).subscribe(() => {
      alert("Condômino cadastrado com sucesso");
      this.router.navigate(["/condominos"]);
    });
  }
}
