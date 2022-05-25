import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  
  
  constructor(private http: HttpClient, 
    private dbFirebase: FirebaseDbService) { 
  }

  ngOnInit(): void {
    this.getPublicacionesRequest();
  }

  resPublicaciones : any = [];

  getPublicacionesRequest()  {
    this.dbFirebase.getPublicaciones().subscribe(res => {
      this.resPublicaciones = res;
    })
  }

  borrarPost(id: number) {
    this.dbFirebase.deletePublicacion(id).subscribe(res => {

      console.log(res);
    })
  }

  ocultarPost(id: number) {
  }
  @Input() comentario: string = '';

  postComment(comentario: string, publicacion: number): void {
    this.comentario = "";
    this.comentario = comentario;
    
    this.dbFirebase.postComment(comentario, publicacion).subscribe(res=> {
      console.log(res);
    })
  }


}
