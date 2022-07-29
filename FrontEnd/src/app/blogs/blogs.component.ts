import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogModel } from '../add-blog/add-blog.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs:BlogModel[] | any;

  constructor(private blogService:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = JSON.parse(JSON.stringify(data));
    })
  }

  showblog(){
    // alert('blog has been clicked');
    this.router.navigate(['home/viewblog']);

  }


}
