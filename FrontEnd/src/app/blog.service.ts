import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  server_address: string = 'api' ;

  constructor(public http:HttpClient) { }

  newBlogs(item:any){
    return this.http.post(`${this.server_address}/posts/savepost`,{ item })
    .subscribe((data)=>console.log(data));
  }

  getBlogs(){
    return this.http.get(`${this.server_address}/admin/pending`);
  }

  getapprovedBlogs(){
    return this.http.get(`${this.server_address}/admin/approved`);
  }

  getapprovedBloglatest(){
    return this.http.get(`${this.server_address}/admin/approved/latest`);
  }

  getapprovedBloglatest2(){
    return this.http.get(`${this.server_address}/admin/approved/latest2`);
  }

  approvedBlogs(){
    return this.http.get(`${this.server_address}/posts`);
  } 

  singleblog(id:any){
    return this.http.get(`${this.server_address}/singleblog/`+id);
  }

  updateCategory(i:any){
    console.log("Blog Service");
    console.log(i);
    return this.http.put(`${this.server_address}/admin/approve`,i).subscribe((data)=>console.log(data));
  }
  

  deleteBlog(id:any)
  {
    return this.http.delete(`${this.server_address}/admin/deny/`+id)
  }

}

