import { Route } from "@angular/router";
import { TRANSLOCO_SCOPE } from "@ngneat/transloco";

export const LAZY_ROUTES: Route = {
  path: "lazy",
  loadComponent: () =>
    import("./lazy.component").then((LazyComponent) => LazyComponent),
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: "admin-page" }]
};
