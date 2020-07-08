import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alienapi';
  htmlVariable: string = "<b>Some html.</b><br><h1>teste</h1>";

}
