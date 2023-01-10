import {CondominoViewComponent} from "./condomino/condomino-view/condomino-view.component";
import {CondominoUpdateComponent} from "./condomino/condomino-update/condomino-update.component";
import {CondominoCreateComponent} from "./condomino/condomino-create/condomino-create.component";
import {CondominoListComponent} from "./condomino/condomino-list/condomino-list.component";
import {NavComponent} from "./nav/nav.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CondominoDeleteComponent} from "./condomino/condomino-delete/condomino-delete.component";

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
      },
      {
        path: "condominos/view/:idCondomino",
        component: CondominoViewComponent
      },
      {
        path: "condominos/delete/:idCondomino",
        component: CondominoDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
