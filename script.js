const btn = document.getElementById('btn');
var email = document.getElementById('email');
var password = document.getElementById('password');
console.log(email);
// var password = document.getElementById('password');
btn.addEventListener('click',(e) =>{
  e.preventDefault();
  var email_value = document.getElementById('one').value;
  var length = email_value.length;
  console.log(length);
  if(length <6){
    email.classList.add("active");
  }
})
var one = document.getElementById("one"); 
var label= document.getElementById("label");
var msg = document.getElementById("msg");87
function validateEmail(){
if(!one.value.match(/^[A-Za-z\.-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  msg.innerHTML = "please enter a valid email";
  return false;
}
msg.innerHTML ="";
return true;

}






























//console.log("hello world");
//alert("hello world");
//var  y = 4;
//var x = 4;
//var sum= x+y;
//console .log(sum);

//for(var i=0; i <10; i++){
    //if(i===5){
    //    continue;
  //  }
//console.log("i");
//}
//function greet(){
    //console.log("good morning")
//}

//function sum(x,y){
   // return x+y;
//}
//console.log(sum(3,y));
 //function greetBtime(time){
  //   for(cons i=6; i<=18; i++){
   // let greeting;
   // if(i<12){
      //   greeting="Good morning";

   //  }
   // else if(i>=12&& i<18){
      // greeting="Good afternoon";
 //  }
  // else{
     //  greeting="good evening";
  //  }
  //  return greeting;
//}
 //}
//var btn = document.getElementById("btn");
//btn.addEventListener('click',(e)=>{
  //  e.preventDefault();

   // var one =parseInt(document.getElementById ("one").value);
    //var two =parseInt(document.getElementById ("two").value);
   // var substract= one -two;
  ///  console.log(substract)
//})  
//function timee(){
  //  var timeinput =document.getElementById("time").value;
  //  var time = new Date("1970-01-017") +timeinput +""
//}




//var myDiv = document.getElementById("root");
//var p = document.createElement("p");

// myDiv.append(p);
// p.innerHTML="MY NAME IS";
// p.classList.add("brune");


// document.getElementById.src 
// var button= document.getElementById("button");
// var myimage= document.getElementById("myImage");
// mybutton.AddEventListener("click",fuction() {
//     myImage.src="bulb 2";
// });