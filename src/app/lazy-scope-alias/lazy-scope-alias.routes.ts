import { Route } from "@angular/router";
import { TRANSLOCO_LOADING_TEMPLATE } from "@ngneat/transloco";

export const LAZY_SCOPE_ALIAS_ROUTES: Route = {
  path: "lazy-scope-alias",
  loadComponent: () =>
    import("./lazy-scope-alias.component").then(
      (LazyScopeAliasComponent) => LazyScopeAliasComponent
    ),
  providers: [
    {
      provide: TRANSLOCO_LOADING_TEMPLATE,
      useValue: `<span id="default-loading-template">Loading template...</span>`
    }
  ]
};
