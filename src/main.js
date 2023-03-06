let html = document.querySelector("#demo");
let style = document.querySelector("#style")
let string = `/*你好，我叫小山竹
*接下来我来演示我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width: 200px;
    height:200px;
}
/*接下来我把div变成八卦图
*注意看好了
*首先，把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1:before{
    top:0;
    left:50%;
    transform: translateX(-50%);
    width:100px;
    height:100px;
    border-radius:50%;
    background:rgb(255,255,255);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1:after{
    bottom:0; 
    left:50%;
    transform: translateX(-50%);   
    width:100px;
    height:100px;
    border-radius:50%;
    background:rgb(0,0,0);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;
let string2 = '';
let n = 0;
let step = () => {
    setTimeout(() => {
        // string2+=(string[n]==='\n'?'<br>':string[n])
        if (string[n] === '\n') {
            //如果是回车，就不照搬
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += "&nbsp"
        }
        else {
            //如果不是回车就不照搬
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);//滚动页面
        demo.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n = n + 1;
            step();
        }
    }, 50);
};

step()