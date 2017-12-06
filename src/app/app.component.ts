import { Component } from '@angular/core';


// (Standard component import up here)

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title:string;
  content:string;
  postsCol: AngularFirestoreCollection<Post>;
  //posts: Observable<Post[]>;
posts:any;

postDoc: AngularFirestoreDocument<Post>;
singlePost: Observable<Post>;

  constructor(private afs: AngularFirestore) {}

   ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    //  this.postsCol = this.afs.collection('posts', ref => ref.where('title', '==', 'coursetro'));
    
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });

  }
  
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }
  // addPost() {
  //   this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
  // }

  getPost(postId) {
    
    this.postDoc = this.afs.doc('posts/'+postId);
    this.singlePost = this.postDoc.valueChanges();
  }
  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }
}
interface Post {
  title: string;
  content: string;
}
interface PostId extends Post { 
  id: string; 
}