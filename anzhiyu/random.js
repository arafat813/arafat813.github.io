var posts=["posts/2d900bbb.html","posts/4db0c680.html","posts/888898f6.html","posts/90039cb8.html","posts/b0b32b9.html","posts/f55bc382.html","posts/9b47c56e.html","posts/f4a69292.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};