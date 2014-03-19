nfb
===

Introduction
---
    A filebrowser for node.It is not perfect,but very easy to use

    Front page is base on RoxyFileman,An open source file browser

    Subsequent releases will add more skin, you can switch at any time
<br/>
Require
---
    nodejs *
    Express 3.4.6

<br/>
Getting Started
---
### Step 1 -- Move pages
Move the folder that in the modules folder named  “pages”  to the path where you like,and you can rename it with any other word
<br/><br/>
### Step 2 -- Acquiring module
        //app is an instance of Express
        var app = require("express")();
        equire('nfb')(app);
<br/><br/>
### Step 3 -- Use in your Project
##### You can simplely use it like this:
    
    //btn_openFileBrowser is the ID of a button
    document.getElementById('btn_openFileBrowser').onclick = function(){
        window.showModalDialog(path,null,"dialogWidth=800px;dialogHeight=500px");
    };
###### When you click the button,you can open the nfb in a dialog
<br/>
##### If you want to use it into CKEditor or any other Text Editor which support FileBrowser
##### You can set like this:
    //change option in conf.json(pages folder)
    "INTEGRATION":"CKEDITOR"
<br/>
    //add option in config.js(example of CKEditor)
    //path is the location of index.html(pages folder)
    config.filebrowserBrowseUrl = path;
<br/>
License
---

The MIT License (MIT)

Copyright (c) 2014 [Joker-Jelly](https://github.com/Joker-Jelly/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
<br/>
End
---

Thank you for using,I'm a beginner in both English and Nodejs aspects
<br/>
感谢使用，我在英语和nodejs方面，都属于一个初学者^_^，如果文中有任何错误，还请见谅
<br/><br/>
You can feedback any bugs or suggestions to [me](zl601109@gmail.com) at any time
<br/>
如果发现任何程序错误或者改进建议，都可以随时发送到我的邮箱

