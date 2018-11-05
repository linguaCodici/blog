import { Blog } from './blog.model';

export class BlogsService {
  private blogs: Blog[] = [

  ];

  getBlogs() {
    return this.blogs;
  }
}
