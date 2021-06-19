import { Component, OnInit } from '@angular/core';
import { InstituicoesMulherModel } from 'src/app/services/instituicoes-mulher-model';
import { InstituicoesMulherService } from 'src/app/services/instituicoes-mulher.service';

@Component({
  selector: 'app-instituicoes-page',
  templateUrl: './instituicoes-page.component.html',
  styleUrls: ['./instituicoes-page.component.css']
})
export class InstituicoesPageComponent implements OnInit {

  constructor(public instituicoesMulherService: InstituicoesMulherService) { }

  public listInstituicoes: InstituicoesMulherModel[] = [];

  ngOnInit(): void {
    this.instituicoesMulherService.get().subscribe({
      next: (responseApi) => {
        this.listInstituicoes = responseApi;
      }
    })
  }

}
