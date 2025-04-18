var posts=["2025/04/13/hello-world/","2025/04/18/hello-world1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };