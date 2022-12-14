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

  latestlog:BlogModel[];

  latestlog2:BlogModel[];

  _filtervalue: string = '';

  filterblog: BlogModel[];

  normalblog: BlogModel[];

  



  get filtervalue(){
    return this._filtervalue;
  }

  set filtervalue(value:string){
    this._filtervalue = value;
    this.filterblog = this.filterBlogByCat(value);
    this.latestlog = this.filterblog.slice(0, 1);
    this.latestlog2 = this.filterblog.slice(1, 3);
    this.normalblog = this.filterblog.slice(3, 15);


  }

  constructor(private blogService:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.blogService.getapprovedBlogs().subscribe((data) => {
      this.blogs = JSON.parse(JSON.stringify(data));
      this.filterblog = this.blogs;
      this.latestlog = this.filterblog.slice(0, 1);
      this.latestlog2 = this.filterblog.slice(1, 3);
      this.normalblog = this.filterblog.slice(3, 12);

    })


    // this.blogService.getapprovedBloglatest().subscribe((data)=>{
    //   this.latestlog = JSON.parse(JSON.stringify(data));
    // })

    // this.blogService.getapprovedBloglatest2().subscribe((data)=>{
    //   this.latestlog2 = JSON.parse(JSON.stringify(data));
    // })
  }

  showblog(i:any){
    localStorage.setItem("viewblog", i._id.toString());
    this.router.navigate(['home/viewblog']);
    // console.log("id = "+i._id)
  }

  filterBlogByCat(filterTerm:string){

    if(this.blogs.length === 0 || this.filtervalue === ''){
      return this.blogs;
    } else {
      return this.blogs.filter((blogs) => {
        return blogs.category === filterTerm;
      })
    }

  }


}
