import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilmService } from '../../film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor (private film:FilmService,
    private router:Router
  ){}
  onAdd(data:any):void{
    if(!data.tenPhim || data.tenPhim.length<6){
      alert("nhập tên phim và lớn hơn 6 ký tự ")
      return;
    }
    if(!data.daoDien){
      alert("nhập tên đạo diễn ")
      return;
    }
    if(!data.anhBia){
      alert("nhập tên phim và lớn hơn 6 ký tự ")
      return;
    }
    if(!data.ngayPhatHanh){
      alert("nhập ngày phát hành ")
      return;
    }
   
    this.film.add(data).subscribe({
      next:()=>{
        alert("thêm tc")
        this.router.navigate([''])
      }
      
    })

  }
}
