import { Component, OnInit } from '@angular/core';
import { LeisMulherModel } from 'src/app/services/leis-mulher-model';
import { LeisMulherService } from 'src/app/services/leis-mulher.service';

@Component({
  selector: 'app-leis-page',
  templateUrl: './leis-page.component.html',
  styleUrls: ['./leis-page.component.css']
})
export class LeisPageComponent implements OnInit {

  constructor(public leisMulherService: LeisMulherService) { }

  public listLeis: LeisMulherModel[] = []

  ngOnInit(): void {
    this.leisMulherService.get().subscribe({
      next: (responseApi) => {
        this.listLeis = responseApi;
      }
    })
  }

}
