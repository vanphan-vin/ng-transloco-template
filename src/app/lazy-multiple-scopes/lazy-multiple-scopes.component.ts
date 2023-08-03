import { Component } from "@angular/core";
import { TranslocoModule, TRANSLOCO_SCOPE } from "@ngneat/transloco";

@Component({
  selector: "app-lazy-multiple-scopes",
  templateUrl: "./lazy-multiple-scopes.component.html",
  styleUrls: ["./lazy-multiple-scopes.component.scss"],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: "admin-page", alias: "AdminPageAlias" },
      multi: true
    },
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: "lazy-page", alias: "LazyPageAlias" },
      multi: true
    }
  ],
  standalone: true,
  imports: [TranslocoModule]
})
export default class LazyMultipleScopesComponent {}
