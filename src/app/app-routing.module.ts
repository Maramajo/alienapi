import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AliensComponent } from './aliens/aliens.component';
import { StocksComponent } from './stocks/stocks.component';
import { ContatoComponent } from './contato/contato.component';
import { FamiliasComponent } from './stocks/familias/familias.component';
import { FamDetalheComponent } from './stocks/fam-detalhe/fam-detalhe.component';


const routes: Routes = [
  {path: '',  redirectTo: '/aliens', pathMatch: 'full' },
  {path: 'aliens' , component: AliensComponent},
  {path: 'contato' , component: ContatoComponent},
  {path: 'stocks' , component: StocksComponent},
  {path: 'familias' , component: FamiliasComponent},
  {path: 'fam-det' , component: FamDetalheComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
