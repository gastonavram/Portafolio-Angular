import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  irsobre() {
    this.router.navigate(['/sobre-mi'])
  }
  
  irexperiencia() {
    this.router.navigate(['/experiencia'])
  }
  
  ireducacion() {
    this.router.navigate(['/educacion'])
  }
  
  irhabilidades() {
    this.router.navigate(['/habilidades'])
  }

  irproyectos() {
    this.router.navigate(['/proyectos'])
  }

  ircontacto() {
    this.router.navigate(['/contacto'])
  }

}
