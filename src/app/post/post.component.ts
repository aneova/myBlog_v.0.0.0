import {Component, OnInit} from '@angular/core';
import {Post, PostsService} from '../posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) {

  }
  post: Post;

  ngOnInit(): void {
  this.route.params.subscribe((params) => {
  this.post  = this.postsService.getById(+params.id);
  });
  }
  loadPosts() {
  // this.router.navigate(['/posts',44]);
  }

}
