import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { FilmService } from '../../film.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  films :any ;
  constructor(private film:FilmService) {}
  ngOnInit(){
    this.film.list().subscribe({
      next :(data) => {
        console.log(data);
        this.films=data; 
      },
    })
  }
  handleDele(id:string){
    if(confirm("xoa ok")){
      console.log(id);
    this.film.remove(id).subscribe({
      next :()=>{
        this.films = this.films.filter((item:any)=> item.id != id)
        alert("xoa ok ")
        
      }
    })
    }
    
  }
}