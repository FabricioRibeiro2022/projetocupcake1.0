import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [

  {
    path: 'bem-vindo',
    component: BemVindoComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: 'cardapio',
    component: CardapioComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'sobre-nos',
    component: SobreNosComponent
  },

  // Este abaixo irá redirecionar qualquer caminho não listado acima para o 'home'.
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
