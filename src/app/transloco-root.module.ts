import { HttpClient } from "@angular/common/http";
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule
} from "@ngneat/transloco";
import { TranslocoMessageFormatModule } from "@ngneat/transloco-messageformat";
import { Injectable, NgModule } from "@angular/core";
import { TranslocoLocaleModule } from "@ngneat/transloco-locale";

@Injectable({ providedIn: "root" })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  imports: [
    // TranslocoPreloadLangsModule.forRoot(['lazy-page/es']),
    TranslocoMessageFormatModule.forRoot(),
    TranslocoLocaleModule.forRoot({
      langToLocaleMapping: {
        en: "en-US",
        es: "es-ES"
      }
    })
  ],
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: [
          { id: "en", label: "English" },
          { id: "es", label: "Spanish" }
        ],
        reRenderOnLangChange: true,
        fallbackLang: "es",
        defaultLang: "en",
        missingHandler: {
          useFallbackTranslation: false
        }
        // interpolation: ['<<<', '>>>']
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ]
})
export class TranslocoRootModule {}
