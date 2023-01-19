import {TaxaViewComponent} from "./taxa/taxa-view/taxa-view.component";
import {TaxaUpdateComponent} from "./taxa/taxa-update/taxa-update.component";
import {TaxaCreateComponent} from "./taxa/taxa-create/taxa-create.component";
import {TaxaListComponent} from "./taxa/taxa-list/taxa-list.component";
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
      {path: "condominos/view/:idCondomino", component: CondominoViewComponent},
      {
        path: "condominos/delete/:idCondomino",
        component: CondominoDeleteComponent
      },

      {path: "taxas", component: TaxaListComponent},
      {path: "taxas/create", component: TaxaCreateComponent},
      {
        path: "taxas/update/:idTaxa",
        component: TaxaUpdateComponent
      },
      {path: "taxas/view/:idTaxa", component: TaxaViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
