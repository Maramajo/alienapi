import { Component, OnInit } from '@angular/core';
import { Familia } from './familia';
import { ServicosService } from '../servicos.service';
import { Msg } from '../msg';
import { Chave } from '../chave';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.css']
})
export class FamiliasComponent implements OnInit {
  quem: string = "familias";
  familias: Familia[] = [];
  fam: Array<any>;
  msgs: Msg[] = [];
  m: string = "";
  a: Array<any>;
  b: string;
  enable = true;
  teste: Familia;
  msg: string = "";


familia: Familia;
public chave = new Chave();



  constructor(private servico: ServicosService) { }

  ngOnInit(): void {
    
    this.chave.app_key = "0MlakR2P5VzxLNoUqcrfAb9skYtZ3w2X";
    this.chave.Token = "1570";
    this.getFams();
    console.log("carregou2 - ", this.familias);
    console.log("carregoum1 - ", this.msgs);
    console.log("sou a de novo==>", this.a);
    console.error("TESTE2 - ", this.teste);
    console.log("MESSAGE1 - ",this.msg);

    




  }
  getFams(): void{
    this.servico.getFams(this.chave)
    .subscribe((fas: Familia[]) => {
      this.familias = fas;
   //   this.familias.forEach((erg)=>this.teste.RESULTS = (erg.RESULTS));
  //    this.teste[0].MESSAGE = (this.familias[0].MESSAGE);
      console.error("TESTE1 - ", this.teste);
      //this.msgs = fas;
      this.b = "[" + JSON.stringify(fas) + "]";
      this.a = JSON.parse(this.b);
      this.familias = this.a;
      
      console.log("sou a==>", this.a);
     // this.familias.forEach(function (value) {
      //  console.log("VALOR DE FAMILIAS - ",value);
        this.msg = this.familias[0].MESSAGE;
        console.log("MESSAGE - ",this.msg);
    //  }); 

   //   console.log([fas]);
      console.log("carregou1 - ", this.familias);
      console.log("carregoum - ", this.msgs);
      console.log("aqui???", fas)
    }, (error) => {
      console.log("do componente - ", error);
    }
    );
     console.log("carregou - ", this.msgs);
     this.servico.arfam = this.familias;
    };

    saveFam(f){
      this.familias = f;
      console.log('salvou familias???? - ', this.familias);
      this.servico.arfam = this.familias;
      console.log("MESSAGE2 - ",this.msg);


    }
    ngOnDestroy(){
      console.log("DESTRUINDO");
      this.saveFam(this.familias);
    }


}
