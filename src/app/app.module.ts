import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonsSidebarComponent } from './persons-sidebar/persons-sidebar.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { CardsComponent } from './cards/cards.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ModalMessageComponent } from './modal-message/modal-message.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonsSidebarComponent,
    PersonProfileComponent,
    CardsComponent,
    RatingsComponent,
    ModalMessageComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
