import { Component, OnInit } from '@angular/core';
import {NgToastService} from 'ng-angular-popup'

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private toast:NgToastService) { }

  ngOnInit(): void {
  }

  AddBlog(){
    // showSuccess() {
      // alert('success')
      this.toast.success({detail:"SUCCESS",summary:'Blog will publish when admin approved it',duration:6000})
    // }

  }
}
