import { Component, OnInit } from '@angular/core';
import {Alien} from './alien';
import { AliensService } from './aliens.service';
import { Observable, of  } from 'rxjs';
import { catchError, map, tap,  } from 'rxjs/operators';


@Component({
  selector: 'app-aliens',
  templateUrl: './aliens.component.html',
  styleUrls: ['./aliens.component.css']
})
export class AliensComponent implements OnInit {
aliens: Alien[] = [];
public alien = new Alien();
  constructor(private _alienservice: AliensService) { }

  ngOnInit(): void {
    this.getAliens();
    console.log("ngOnInit - ", this.aliens)
  }
  getAliens(): void{
    this._alienservice.getAllAliens()
    .subscribe((al) => {
      this.aliens = al,
      console.log(al)
    }, (error) => {
      console.log("do componente - ", error);
    });
    // console.log(this.aliens);
    };
    addAlien(): void{
      this._alienservice.addAlien(this.alien)
      .subscribe(al => {
        console.log(al),
        this.reset();
        this.getAliens()
      }, (error) => {
        console.log("erro de adição - ", error);
      }
        //this.alien = al;
      );  
    }
    updAlien(): void{
      this._alienservice.updAlien(this.alien)
      .subscribe(al => {
        console.log(al),
        this.reset();
        this.getAliens()
      }, (error) => {
        console.log("erro de atualização - ", error);
      }
        //this.alien = al;
      );  
    }

    delAlien(a: Alien): void{
      this._alienservice.delAlien(a)
      .subscribe(al => {
        console.log(al),
        this.reset();
        this.getAliens()
      }, (error) => {
        console.log("erro de deleção - ", error);
      }
        //this.alien = al;
      );  
    }
    getAlien(a: Alien): void{
      console.log("estou em getalien");
      this._alienservice.getAlien(a)
      .subscribe(al => {
        this.alien = al,
        console.log(al)
        //this.getAliens()
      }, (error) => {
        console.log("erro de deleção - ", error);
      }
        //this.alien = al;
      );  
    }


    reset(){
      this.alien.id = null;
      this.alien.name = null;
      this.alien.points = null;
    }
  }



