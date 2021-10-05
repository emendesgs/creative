import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/user/users.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "email", "symbol"];
  dataSource = [];
  constructor(public userSevice: UsersService) {}

  ngOnInit() {
    this.getUsuarios()
  }
  
  getUsuarios(){
    return this.userSevice.getUsuarios().subscribe({
      next: (res) => {
        console.log(res)
        this.dataSource = res.results
        console.log(this.dataSource)
      }
    })

  }
}
