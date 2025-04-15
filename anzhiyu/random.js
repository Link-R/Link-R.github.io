var posts=["2025/04/13/hello-world/","2025/04/15/欢迎来到本呐的小窝/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };