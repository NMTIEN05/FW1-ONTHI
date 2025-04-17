import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private api:HttpClient) { }
  list(){
    return this.api.get(`http://localhost:3000/films`)
  }
  listbyid(id:number){
    return this.api.get(`http://localhost:3000/films/${id}`)
  }
  add(data:any){
    return this.api.post(`http://localhost:3000/films`,data)
  }
  Edit(data:any ,id:number){
    return this.api.put(`http://localhost:3000/films/${id}`,data)
  }
  remove(id:number){
    return this.api.delete(`http://localhost:3000/films/${id}`)
  }
}
