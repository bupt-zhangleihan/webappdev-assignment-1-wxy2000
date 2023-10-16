# DOM event接口：键盘事件

## 使用键盘方向键控制图形的移动

### 介绍

1.onkeydown：按键按下

如果按住按键不松，则该事件会连续触发

当onkeydown连续触发时，第一次和第二次之间会间隔时间稍长，其他的会非常快，这种设计是为了防止一些误操作

2.onkeyup：按键被松开

3.keyCode：来获取按键的编码，通过它可以判断哪个按键被按下

4.altKey，ctrlKey， shiftKey：这三个属性用来判断alt ctrl shift 是否被按下，如果按下则返回true，否则返回false

### 案例效果

见gif

### 实现代码

```js
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>方向键控制方块的移动</title>
        <style>
            #box1{
                width: 100px;
                height: 100px;
                background-color: tomato;
                position: absolute;
            }
        </style>
        <script>
            window.onload = function(){
                var box1 = document.getElementById("box1");
                document.onkeydown = function(event){
                    //使各种浏览器兼容event
                    event = event || window.event;

                    //定义一个变量表示图形移动的速度
                    var divMove = 10;
                    //当按下Ctrl时，移动加速
                    if(event.ctrlKey){
                        console.log("Ctrl已按下");
                        divMove = 50;
                    }

                    console.log("keyCode = "+event.keyCode);
                    switch(event.keyCode){
                        case 37:box1.style.left = box1.offsetLeft - divMove + "px";break;
                        case 38:box1.style.top = box1.offsetTop - divMove + "px";break;
                        case 39:box1.style.left = box1.offsetLeft + divMove + "px";break;
                        case 40:box1.style.top = box1.offsetTop + divMove + "px";break;
                        
                    }
                };
            };
        </script>
    </head>
    <body>
        <div id="box1"></div>
    </body>
</html>
```

