import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'remedio', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cadastro-usuario', loadChildren: './pages/cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' },
  { path: 'cadastro-profissional', loadChildren: './pages/cadastro-profissional/cadastro-profissional.module#CadastroProfissionalPageModule' },
  { path: 'cadastro-geral', loadChildren: './pages/cadastro-geral/cadastro-geral.module#CadastroGeralPageModule' },
  { path: 'pagina-inicial', loadChildren: './pages/pagina-inicial/pagina-inicial.module#PaginaInicialPageModule' },
  { path: 'perfil-usuario', loadChildren: './pages/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule' },
  { path: 'remedio', loadChildren: './pages/remedio/remedio.module#RemedioPageModule' },
  { path: 'cadastro-remedio', loadChildren: './pages/cadastro-remedio/cadastro-remedio.module#CadastroRemedioPageModule' },
  { path: 'cadastro-prontuario', loadChildren: './pages/cadastro-prontuario/cadastro-prontuario.module#CadastroProntuarioPageModule' },
  { path: 'cadastro-consulta', loadChildren: './pages/cadastro-consulta/cadastro-consulta.module#CadastroConsultaPageModule' },
  { path: 'consultas', loadChildren: './pages/consultas/consultas.module#ConsultasPageModule' },
  { path: 'perfil-dados', loadChildren: './pages/perfil-dados/perfil-dados.module#PerfilDadosPageModule' },
  { path: 'perfil-alergias', loadChildren: './pages/perfil-alergias/perfil-alergias.module#PerfilAlergiasPageModule' },
  { path: 'configuracoes', loadChildren: './pages/configuracoes/configuracoes.module#ConfiguracoesPageModule' },
  { path: 'perfil-historico', loadChildren: './pages/perfil-historico/perfil-historico.module#PerfilHistoricoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
