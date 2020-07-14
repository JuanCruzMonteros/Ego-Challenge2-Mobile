import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './globals/header/header.component';
import { FooterComponent } from './globals/footer/footer.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { BannerComponent } from './components/resumen/banner/banner.component';
import { CardsComponent } from './components/resumen/cards/cards.component';
import { AccountsComponent } from './components/resumen/accounts/accounts.component';
import { NavbarComponent } from './components/resumen/navbar/navbar.component';
import { MoneyComponent } from './components/resumen/money/money.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResumenComponent,
    BannerComponent,
    CardsComponent,
    AccountsComponent,
    NavbarComponent,
    MoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
