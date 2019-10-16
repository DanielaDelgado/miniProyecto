import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'botticelli', loadChildren: './botticelli/botticelli.module#BotticelliPageModule' },
  { path: 'imagen-modal', loadChildren: './imagen-modal/imagen-modal.module#ImagenModalPageModule' },
  { path: 'modigliani', loadChildren: './modigliani/modigliani.module#ModiglianiPageModule' },
  { path: 'velazquez', loadChildren: './velazquez/velazquez.module#VelazquezPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
