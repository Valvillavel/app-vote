import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrl:string="http://localhost:1337/"
  url:String="http://localhost:1337/"
  
  constructor(
    private http: HttpClient,
  ) { }
  public getCandidatos():Observable<any>{
    return this.http.get(this.url+'candidatoes/')
  }
  public getVotantes():Observable<any>{
    return this.http.get(this.url+'votantes/')
  }
  public deleteVotante(id):Observable<any>{
    return this.http.delete(this.url +'candidatoes/'+id)
  }
  public deleteCandidato(id):Observable<any>{
    return this.http.delete(this.url +'votantes/'+id)
  }
  public postVotante(body):Observable<any>{
    return this.http.post(this.url+'votantes/',body)
  }
  public postCandidato(body):Observable<any>{
    return this.http.post(this.url+'candidatoes/',body)
  }
  public updateCandidato(id,body):Observable<any>{
    return this.http.put(this.url + 'candidatoes/'+id,body)
  }
  public updateVotante(id,body):Observable<any>{
    return this.http.put(this.url + 'votantes/'+id,body)
  }
}
