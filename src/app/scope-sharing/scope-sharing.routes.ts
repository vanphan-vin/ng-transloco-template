import { Route } from "@angular/router";
import { TRANSLOCO_LOADING_TEMPLATE, TRANSLOCO_SCOPE } from "@ngneat/transloco";

export const SCOPE_SHARING_ROUTES: Route = {
  path: "scope-sharing",
  loadComponent: () =>
    import("./scope-sharing.component").then(
      (ScopeSharingComponent) => ScopeSharingComponent
    ),
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: "todos-page",
        alias: "todos"
      }
    },
    {
      provide: TRANSLOCO_LOADING_TEMPLATE,
      useValue: `<span id="default-loading-template">Loading template...</span>`
    }
  ]
};
