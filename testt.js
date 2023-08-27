window.onload=function(){
//const ulo= document.querySelector('ul')
//const li= document.createElement("li");
//console.log(ulo)
//
//li.innerHTML="amir 5";
//ulo.append(li);
//var ol=document.getElementById('amir')

// new day
let div = document.createElement("div");
const input1=document.createElement("input");
const input2=document.createElement("input");
let image=document.createElement("img")
let image1=document.createElement("img")
let p = document.createElement("p");
//
document.body.appendChild(div)
////
div.append(p);

div.append(input1);
div.append(input2);
div.append(image)
////
//body.setAttribute("style","background-color:;)
div.setAttribute("id","container");
div.setAttribute('style','display:flex; width:300px; height:400px; justify-content: center; background: linear-gradient(#030d1a,#1907a0aa); margin:0px auto;border-radius: 30px;position:reletive;');
image.setAttribute("src","2.jpg")
image.setAttribute("style","border-radius:50%; width:150px; height:150px;padding:30px;")
image1.setAttribute("src","back.jpg")
//image1.setAttribute("style","z-index:-1;")

input1.setAttribute('style','width:190px ;height:20px ;background-color:#fcfcfc;color:black; align-items: center;margin-top:280px; position:fixed;');
input1.setAttribute("type","text")
input1.setAttribute("placeholder","username")
input1.setAttribute("value","username")
input2.setAttribute('style','width:190px ;height:20px ;background-color:#fcfcfc;color:black; margin-top: 325px;position: absolute;')
input2.setAttribute("type","password")
input2.setAttribute("placeholder","password")
document.body.setAttribute("style","background-image: url(back.jpg);")
//input2.setAttribute("value","password")
//
//   document.body.setAttribute("style",`background:black;`)
//setInterval(randombg,2069)
//        function randombg(){
//     let nazi=`rgb(${(Math.floor(Math.random()*75.5))},${(Math.floor(Math.random()*95.5))},${(Math.floor(Math.random()*255))})`
//document.body.setAttribute("style",`background-color:${nazi};`)
//    }
//    setInterval(imgbg,1500);
//    function imgbg(){
//        document.body.setAttribute("style","background-image: url(back.jpg);")
//    }
//    
nsole.log()
// ("style","`background:${nazi};`")

}