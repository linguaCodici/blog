import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
import { Blog } from './blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [BlogsService]
})
export class BlogsComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogs = this.blogsService.getBlogs();
  }

}
