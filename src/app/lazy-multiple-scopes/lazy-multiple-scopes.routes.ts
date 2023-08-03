import { Route } from "@angular/router";
import { TRANSLOCO_LOADING_TEMPLATE } from "@ngneat/transloco";

export const LAZY_MULTIPLE_SCOPES_ROUTES: Route = {
  path: "lazy-multiple-scopes",
  loadComponent: () =>
    import("./lazy-multiple-scopes.component").then(
      (LazyMultipleScopesComponent) => LazyMultipleScopesComponent
    ),
  providers: [
    {
      provide: TRANSLOCO_LOADING_TEMPLATE,
      useValue: `<span id="default-loading-template">Loading template...</span>`
    }
  ]
};
