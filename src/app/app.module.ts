import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    SearchFormComponent,
    NewsListComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
