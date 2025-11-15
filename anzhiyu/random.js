var posts=["2024/10/28/笔记本氮化镓电源使用指北/","2024/10/18/紫金山-阿特拉斯彗星/","2025/03/15/C-查漏补缺/","2025/09/19/butterfly主题魔改/","2022/09/05/diy半导体小冰箱心得/","2022/07/08/diy显示器心得/","2021/10/14/git学习笔记/","2024/06/02/解决索尼WH-1000XM4降噪模式啸叫问题/","2025/10/17/anzhiyu主题魔改/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };