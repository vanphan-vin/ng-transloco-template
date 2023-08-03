import "@angular/platform-browser-dynamic";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { TranslocoRootModule } from "./app/transloco-root.module";
import { ROUTES } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(),
    importProvidersFrom(TranslocoRootModule),
    provideRouter(ROUTES)
  ]
})
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    window["ngRef"]?.destroy();
    window["ngRef"] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
