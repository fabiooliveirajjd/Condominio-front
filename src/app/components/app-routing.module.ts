import {CondominoUpdateComponent} from "./condomino/condomino-update/condomino-update.component";
import {CondominoCreateComponent} from "./condomino/condomino-create/condomino-create.component";
import {CondominoListComponent} from "./condomino/condomino-list/condomino-list.component";
import {NavComponent} from "./nav/nav.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      {path: "condominos", component: CondominoListComponent},
      {path: "condominos/create", component: CondominoCreateComponent},
      {
        path: "condominos/update/:idCondomino",
        component: CondominoUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
