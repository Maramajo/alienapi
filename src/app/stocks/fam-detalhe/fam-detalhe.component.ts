import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { map } from 'rxjs/operators';
import { ServicosService } from '../servicos.service';


@Component({
  selector: 'app-fam-detalhe',
  templateUrl: './fam-detalhe.component.html',
  styleUrls: ['./fam-detalhe.component.css']
})
export class FamDetalheComponent implements OnInit {
  a: Array<any>;
  b: string;
  ar = [];

 // constructor(public rota: ActivatedRoute) { }
  constructor(private servico: ServicosService) { }


  ngOnInit(): void {
    this.b = history.state.data;
    this.ar = history.state.dado;

this.b = "[" + JSON.stringify(this.b) + "]";
  //  this.b = JSON.stringify(this.a) ;

    this.a = JSON.parse(this.b);

   // console.log(this.rota.paramMap
    //  .pipe(map(() => window.history.state)))
      console.log("fam-det - ", this.a);
      console.log("familias em servicos - ", this.servico.arfam);
      console.log("familias em dado - ", this.ar);



  }

}
