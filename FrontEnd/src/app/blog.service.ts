import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }

  newBlogs(item:any){
    return this.http.post('http://localhost:3000/posts/savepost', { item })
    .subscribe((data)=>console.log(data));
  }

  getBlogs(){
    return this.http.get('http://localhost:3000/admin/pending');
  }

  getapprovedBlogs(){
    return this.http.get('http://localhost:3000/admin/approved');
  }

  getapprovedBloglatest(){
    return this.http.get('http://localhost:3000/admin/approved/latest');
  }

  getapprovedBloglatest2(){
    return this.http.get('http://localhost:3000/admin/approved/latest2');
  }

  approvedBlogs(){
    return this.http.get('http://localhost:3000/posts');
  } 

  singleblog(id:any){
    return this.http.get('http://localhost:3000/singleblog/'+id);
  }

  updateCategory(i:any){
    console.log("Blog Service");
    console.log(i);
    return this.http.put('http://localhost:3000/admin/approve',i).subscribe((data)=>console.log(data));
  }
  

  deleteBlog(id:any)
  {
    return this.http.delete("http://localhost:3000/admin/deny/"+id)
  }

}

