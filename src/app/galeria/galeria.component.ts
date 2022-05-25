import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galeria = true;

  mostrarGaleria(mostrarSiNo:  boolean) {
    this.galeria = mostrarSiNo;
  }

  usuario = {
    "nombre":"Hugo Meza",
    "alias": "@vante02",
    "fotoPerfil": "../assets/imagenes/Literalmente Yo.jpg",
    "seguidores": 69,
    "seguidos": 13,
    "bio": "Authistic", 
    "publicaciones" : [ {
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
    ]
  }

}
