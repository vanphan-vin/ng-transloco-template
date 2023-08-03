import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslocoModule } from "@ngneat/transloco";
import { TRANSLOCO_SCOPE } from "@ngneat/transloco";

@Component({
  selector: "app-transpilers",
  templateUrl: "./transpilers.component.html",
  styleUrls: ["./transpilers.component.scss"],
  standalone: true,
  providers: [
    [
      {
        provide: TRANSLOCO_SCOPE,
        useValue: {
          scope: "transpilers/messageformat",
          alias: "mf"
        }
      }
    ]
  ],
  imports: [CommonModule, TranslocoModule]
})
export default class TranspilersComponent {
  dynamic = "🦄";
  key = "home";
  userGender = "female";

  changeParam() {
    this.dynamic = this.dynamic === "🦄" ? "🦄🦄🦄" : "🦄";
  }
}
