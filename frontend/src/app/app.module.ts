// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { NavigationComponent } from './layout/admin/navigation/navigation.component';
import { NavBarComponent } from './layout/admin/nav-bar/nav-bar.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { ConfigurationComponent } from './layout/admin/configuration/configuration.component';
import { NavContentComponent } from './layout/admin/navigation/nav-content/nav-content.component';
import { NavLeftComponent } from './layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './layout/admin/nav-bar/nav-right/nav-right.component';
import { NavGroupComponent } from './layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavSearchComponent } from './layout/admin/nav-bar/nav-left/nav-search/nav-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    BreadcrumbComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
