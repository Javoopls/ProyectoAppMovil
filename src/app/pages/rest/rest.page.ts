import { Component } from '@angular/core';
import { APIClientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.page.html',
  styleUrls: ['./rest.page.scss'],
})
export class RestPage {

  user:any;
  users:any;
  posts:any;
  post:any={
    userId:null,
    id:null,
    title:"",
    body:""
  }
  constructor(private api:APIClientService) {}

  ionViewWillEnter(){
    this.getUsuarios();
    this.getPosts();
  }
  getPosts() {
    this.api.getPosts().subscribe((data)=>{
      this.posts=data;
      this.posts.reverse();
    })
  }
  getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    })
  }

  getUsuario(userId){
    this.api.getUsuario(userId).subscribe((data)=>{
      this.user=data;
    })
  }

  guardarPost(){
    if (this.post.userID==null) {
      if (this.user==undefined) {
        console.log("Seleccione un usuario");
        return;
      }
      this.post.userId=this.user.id;
      this.api.createPost(this.post).subscribe(
        ()=>{
          console.log("Creado Correctamente");
          this.getPosts();
        },
        error=>{
          console.log("Error "+error)
        }
      );
    }
    else{
      this.api.updatePost(this.post.id, this.post).subscribe(
        ()=>{
          console.log("Actualizado Correctamente");
          this.getPosts();
        },
        error=>{
          console.log("Error "+error)
        }
      );
    }
  }

}