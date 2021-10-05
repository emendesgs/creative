import { Component } from "@angular/core";
import { AuthService } from "./services/auth/auth.service";
import { CommonService } from "./services/common/common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Creative Drive";
  isAuthenticated = false;

  constructor(public authService: AuthService, public common: CommonService) {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
  }
  
  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.authService.checkAuthenticated();
    console.log(this.isAuthenticated)
  }

  async logout(): Promise<void> {
    await this.authService.logout("/");
  }
}
