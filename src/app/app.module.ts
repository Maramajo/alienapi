import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AliensComponent } from './aliens/aliens.component';
import { AliensService } from './aliens/aliens.service';
import { HeaderComponent } from './header/header.component';
import { StocksComponent } from './stocks/stocks.component';
import { ContatoComponent } from './contato/contato.component';
import { FamiliasComponent } from './stocks/familias/familias.component';
import { FamDetalheComponent } from './stocks/fam-detalhe/fam-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    AliensComponent,
    HeaderComponent,
    StocksComponent,
    ContatoComponent,
    FamiliasComponent,
    FamDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AliensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
