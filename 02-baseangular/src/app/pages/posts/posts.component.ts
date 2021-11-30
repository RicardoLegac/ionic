import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  mensajes: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void { //es donde la pagina es cargada por primera vez 
    this.dataService.getPosts() //llama la instruccion que esta en data.service.ts el return de getPost 
    .subscribe((posts: any) => { // aca cambiamos el post: any[]
      console.log(posts);
      this.mensajes = posts;
    });
  }

}
