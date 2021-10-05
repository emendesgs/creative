import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    const url = "https://randomuser.me/api/?results=50";
    return this.http.get(url);
  }

  getUsuario() {
    const url = "";
    this.http.get(url);
  }

  createUsuario() {}

  updateUsuario() {}

  deleteUsuario() {}
}
