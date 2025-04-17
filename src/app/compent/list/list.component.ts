import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilmService } from '../../film.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
films:any;
constructor(private film:FilmService){}
ngOnInit(){
  this.film.list().subscribe({
    next :(data)=>{
    console.log(data);
    this.films= data;
    }    
  })
}
handele(id:string){
  if(confirm("xoa??")){
    this.film.remove(id).subscribe({
      next:()=>{
        this.films= this.films.filter((item:any)=>item.id!=id)
        alert("xoa ok")
      }
    })
  }
}
}
