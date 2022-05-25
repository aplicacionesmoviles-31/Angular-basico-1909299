import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  publicaciones = [ {
    "usuario": "@vante02",
    "imagen": "../assets/imagenes/TbHaC-1.jpg",
    "caption": "Me hace sentir en el espacio",
    "comentario": "", 
    "id": "bot1"
  },
  {
    "usuario": "@vante02",
    "imagen": "../assets/imagenes/TbHaC-2.jpg",
    "caption": "Los efectos de sonido de esta cancion son de otro planeta",
    "comentario": "", 
    "id": "bot2"
  },
  {
    "usuario": "@vante02",
    "imagen": "../assets/imagenes/TbHaC-6.jpg",
    "caption": "Mi cancion favorita del album :3",
    "comentario": "", 
    "id": "bot3"
  }
  ];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }


}
