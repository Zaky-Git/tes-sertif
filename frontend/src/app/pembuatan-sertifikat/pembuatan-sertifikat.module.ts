import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PembuatanSertifikatComponent } from './pembuatan-sertifikat.component';
import { DataTablesModule } from 'angular-datatables';
import { ToastyModule } from 'ng2-toasty';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PembuatanSertifikatComponent }
];

@NgModule({
  declarations: [PembuatanSertifikatComponent],
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    DataTablesModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PembuatanSertifikatModule { }
