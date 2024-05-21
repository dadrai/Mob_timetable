import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'spisok-prepod',
    loadChildren: () => import('./spisok-prepod/spisok-prepod.module').then( m => m.SpisokPrepodPageModule)
  },
  {
    path: 'rasp-prepod',
    loadChildren: () => import('./rasp-prepod/rasp-prepod.module').then( m => m.RaspPrepodPageModule)
  },
  {
    path: 'rasp-auditor',
    loadChildren: () => import('./rasp-auditor/rasp-auditor.module').then( m => m.RaspAuditorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
