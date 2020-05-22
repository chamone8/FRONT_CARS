import { Component, OnInit } from '@angular/core';
import { CarroService } from './carro.service';
import { Carros } from './carros-model';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carro: Carros = new Carros();
  carros: Array<any> = new Array();
  constructor(private carroService: CarroService) { }

  ngOnInit() {
    this.Listar();

  }

  Atualizar(id: number) {
    this.carroService.update(id, this.carro).subscribe(carro => {
      this.carro = new Carros();
      this.Listar();
    }, err => {
      console.log("Erro ao atualizar", err);
    }
    );
  }
  Cadastrar() {
    this.carroService.create(this.carro).subscribe(carro => {
      this.carro = new Carros();
      this.Listar();
    }, err => {
      console.log("Erro ao Cadastrar", err);
    }
    );
  }

  Listar() {
    this.carroService.getAll().subscribe(carros => {
      this.carros = carros
    }, err => {
      console.log("Erro ao Listar", err);
    }
    );
  }

  drop(id:number) {

    this.carroService.delete(id).subscribe(carro => {
      this.carro = new Carros();
      console.log(carro);
      this.Listar();
    }, err => {
      console.log("Erro ao Deletara", err);
    }
    );
  }
}
