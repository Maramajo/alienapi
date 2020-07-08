import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = false;
  ddActive = false;
  ctActive = false;
  faActive = false;


  @Input() quem: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.quem) {
      case "stocks":
        console.log("vem de stocks");
        this.ddActive = true;
        this.ctActive = false;
        this.faActive = false;
        break;
      case "contato":
        console.log("vem de contato");
        this.ddActive = false;
        this.faActive = false;
        this.ctActive = true;
        break;
        case "familias":
          console.log("vem de familias");
          this.ddActive = true;
          this.faActive = true;
          this.ctActive = false;
          break;
  
      default:
        console.log("Não sei de onde vem");
        this.ddActive = false;
        this.ctActive = false;
        this.faActive = false;



        break;
    }
  }
  actDD(): void {
    // this.isActive = true;
  }

}
