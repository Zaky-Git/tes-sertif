import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from "./layout/admin/admin.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "pembuatan-sertifikat",
        pathMatch: "full"
      },
      {
        path: "pembuatan-sertifikat",
        loadChildren: () => import('./pembuatan-sertifikat/pembuatan-sertifikat.module').then(m => m.PembuatanSertifikatModule),
        data: { animation: '2' },
      },
    ],
  },
  { path: '**', redirectTo: 'pembuatan-sertifikat' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
