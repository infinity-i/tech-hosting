import { BlogModel } from './add-blog.model';
import { Component, OnInit } from '@angular/core';
import {NgToastService} from 'ng-angular-popup'
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  newBlog = new BlogModel("","","","","","","");
  dataimage: string;
  cardImageBase64:string ='';
  message: string;

  imageupload = '';
  // flag:boolean =true;
  constructor(private toast:NgToastService, public blogService: BlogService, public router:Router) { }

  ngOnInit(): void {
  }

  AddBlog(){
    // showSuccess() {
      // alert('success')
      this.newBlog.imageUrl=this.dataimage;
      this.blogService.newBlogs(this.newBlog);
      this.toast.success({detail:"SUCCESS",summary:'Blog will publish when admin approved it',duration:6000});
      // this.router.navigate(['/home']);
      this.routing()
    // }

  }

  routing(){

    let adminid = localStorage.getItem('admin');
    if(adminid == "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" ){

      this.router.navigate(['/admin']);
    } else{

      this.router.navigate(['/home']);
    }
  }
  onFileSelect(event: any) {
    if(!event.target.files[0] || event.target.files[0].length === 0){
      return
    }
    var size = event.target.files[0].size;
    if(size>75000){
      // this.flag=false;
    this.imageupload = '';

      this.message="Max file size should be 70 Kb";
    }else{

      this.message="";
      // this.flag=true;
    let mimeType=event.target.files[0].type;
    if(mimeType.match(/image\/*/) == null){
      return

    }
    let reader=new FileReader();
    reader.onload=()=>{
      this.dataimage = reader.result as string;
      this.cardImageBase64 = this.dataimage;
      this.imageupload = 'uploaded';

      console.log(this.dataimage)

    }
    reader.readAsDataURL(event.target.files[0]);
  }
}
}
