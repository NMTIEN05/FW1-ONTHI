import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilmService } from '../../film.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  constructor(private film:FilmService,
    private nav:Router,
    private act:ActivatedRoute,
  ){}
  id: number=0;
  oldFilm:any;
ngOnInit(){
 this.id=+this.act.snapshot.params['id'];
//  console.log("aa",this.id);
// onsole.log('Type of ID:', typeof this.id);
console.log('Type of ID:', typeof this.id);
 this.getDetail();
}
getDetail(){
  console.log('Fetching data for ID:', this.id);
  
  this.film.listbyid(this.id).subscribe(res=>{
    this.oldFilm= res;
  })
}
onEdit(value:any){
  console.log('Form value being sent:', value);
  console.log('ID being sent:', this.id);
  this.film.Edit(value,this.id).subscribe({
    next:()=>{
      alert("sửa ok")
      this.nav.navigate(['list'])
    }
  })
}
}
