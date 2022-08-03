import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../add-blog/add-blog.model';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  blogs:BlogModel[] | any;
  constructor(private blogService:BlogService, public router:Router) { }

  ngOnInit(): void {
    this.blogService.approvedBlogs().subscribe((data) => {
      this.blogs = JSON.parse(JSON.stringify(data))
    })
  }

  Delete(id:any){
    this.blogService.deleteBlog(id)
      .subscribe((data) => {
        this.blogs = this.blogs.filter(p => p !== this.blogs);
        window.location.reload()
      })
  
  }

}
