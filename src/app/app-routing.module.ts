import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pagina-inicial', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cadastro-usuario', loadChildren: './pages/cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' },
  { path: 'cadastro-profissional', loadChildren: './pages/cadastro-profissional/cadastro-profissional.module#CadastroProfissionalPageModule' },
  { path: 'cadastro-geral', loadChildren: './pages/cadastro-geral/cadastro-geral.module#CadastroGeralPageModule' },
  { path: 'pagina-inicial', loadChildren: './pages/pagina-inicial/pagina-inicial.module#PaginaInicialPageModule' },
  { path: 'pagina-inicial-v2', loadChildren: './pages/pagina-inicial-v2/pagina-inicial-v2.module#PaginaInicialV2PageModule' },
  { path: 'modal-page', loadChildren: './pages/modal-page/modal-page.module#ModalPagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
