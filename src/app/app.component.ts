import { CommonModule } from "@angular/common";
import { Component, inject, OnDestroy } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslocoService } from "@ngneat/transloco";
import { LangDefinition } from "@ngneat/transloco";
import { Subscription, take } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent implements OnDestroy {
  service = inject(TranslocoService);
  availableLangs = this.service.getAvailableLangs() as LangDefinition[];
  private subscription: Subscription | null;

  get activeLang() {
    return this.service.getActiveLang();
  }

  changeLang(lang: string) {
    // Ensure new active lang is loaded
    this.subscription?.unsubscribe();
    this.subscription = this.service
      .load(lang)
      .pipe(take(1))
      .subscribe(() => {
        this.service.setActiveLang(lang);
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
