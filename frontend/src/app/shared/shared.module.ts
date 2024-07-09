import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from "ngx-perfect-scrollbar";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";


import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { ClickOutsideModule } from "ng-click-outside";
import { CommonModule } from "@angular/common";

import { HttpClient } from "@angular/common/http";
import { LightboxModule } from "ngx-lightbox";
import { NgModule } from "@angular/core";
import { SelectModule } from "ng-select";

import { TranslateHttpLoader } from "@ngx-translate/http-loader";

/*import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';*/

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  imports: [
    SelectModule,
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,

    AutocompleteLibModule,

    ClickOutsideModule,
    LightboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    SelectModule,
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,

    ClickOutsideModule,

    TranslateModule,

  ],
  declarations: [

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },

  ],
})
export class SharedModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
