import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  activo : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  isActive(event : any){
    if (event.target.checked) {
      // El checkbox ha sido seleccionado
      this.activo = true;
    } else {
      // El checkbox ha sido desmarcado
      this.activo = false;
    }
  }
}
