import {AppRoutingModule} from "./components/app-routing.module";
import {DatePipe, registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import ptBr from "@angular/common/locales/pt";
import {LOCALE_ID, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";

import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {ToastrModule} from "ngx-toastr";
import {NavComponent} from "./components/nav/nav.component";
import {CondominoListComponent} from "./components/condomino/condomino-list/condomino-list.component";
import {CondominoCreateComponent} from "./components/condomino/condomino-create/condomino-create.component";
import {CondominoUpdateComponent} from "./components/condomino/condomino-update/condomino-update.component";
import {CondominoViewComponent} from "./components/condomino/condomino-view/condomino-view.component";
import {CondominoDeleteComponent} from "./components/condomino/condomino-delete/condomino-delete.component";
import {TaxaCreateComponent} from "./components/taxa/taxa-create/taxa-create.component";
import {TaxaListComponent} from "./components/taxa/taxa-list/taxa-list.component";
import {TaxaUpdateComponent} from "./components/taxa/taxa-update/taxa-update.component";
import {TaxaViewComponent} from "./components/taxa/taxa-view/taxa-view.component";
import {TaxaDeleteComponent} from "./components/taxa/taxa-delete/taxa-delete.component";
import {DespesaListComponent} from "./components/despesa/despesa-list/despesa-list.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CondominoListComponent,
    CondominoCreateComponent,
    CondominoUpdateComponent,
    CondominoViewComponent,
    CondominoDeleteComponent,
    TaxaCreateComponent,
    TaxaListComponent,
    TaxaUpdateComponent,
    TaxaViewComponent,
    TaxaDeleteComponent,
    DespesaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [{provide: LOCALE_ID, useValue: "pt"}],
  bootstrap: [AppComponent]
})
export class AppModule {}
