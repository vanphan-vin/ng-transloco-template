import { Component } from "@angular/core";
import { TranslocoModule, TRANSLOCO_LANG } from "@ngneat/transloco";

@Component({
  selector: "app-provider-lang",
  templateUrl: "./provider-lang.component.html",
  styleUrls: ["./provider-lang.component.scss"],
  providers: [
    {
      provide: TRANSLOCO_LANG,
      useValue: "es"
    }
  ],
  standalone: true,
  imports: [TranslocoModule]
})
export class ProviderLangComponent {}
