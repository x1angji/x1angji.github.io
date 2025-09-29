var posts=["2024/10/28/笔记本氮化镓电源使用指北/","2024/10/18/紫金山-阿特拉斯彗星/","2025/03/15/C-查漏补缺/","2025/09/19/博客搭建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };