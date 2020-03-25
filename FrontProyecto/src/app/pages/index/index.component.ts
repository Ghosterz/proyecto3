import { ClienteService } from "src/app/services/cliente.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  constructor(protected clienteService: ClienteService) {}

  ngOnInit() {}

  backup() {
    alert(
      "Su Base de datos se esta respaldando en la carpeta de la api Server/dump/"
    );
    this.clienteService.backup().subscribe(
      data => {
        alert(
          "Su Base de datos se respaldo correctamente en la carpeta de la api Server/dump/"
        );
      },
      error => {
        console.error(error);
      }
    );
  }
}
