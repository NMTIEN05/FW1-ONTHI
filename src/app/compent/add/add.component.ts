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
    private nav:Router
  ){}
  onSubmit(value:any){
    if(!value.tenPhim || value.tenPhim.length<6){
      alert("nhập tên phim và lớn hơn 6 ký tự ")
      return;
    }
    if(!value.daoDien){
      alert("nhập tên đạo diễn ")
      return;
    }
    if(!value.anhBia){
      alert("nhập anhBia")
      return;
    }
    if(!value.ngayPhatHanh){
      alert("nhập ngày phát hành ")
      return;
    }
    this.film.add(value).subscribe({
      
      next:()=>{
       
        alert("thêm ok")
        this.nav.navigate(['list'])
        
      }
    })
  }
}
