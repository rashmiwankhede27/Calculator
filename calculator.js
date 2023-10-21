var title=document.querySelector("title")
var display=document.querySelector("input")
var btn=document.querySelectorAll("button")
var storage=[]
var result=0
var temp=0


function toggle(){
    if(title.innerHTML=="calculator"){
        title.innerHTML="calci"
    }
    else{
        title.innerHTML=="calculator"
    }
}

setInterval(toggle,2000)


 btn.forEach((numbers)=>{
    numbers.addEventListener("click",()=>{
        calculation(numbers.innerHTML)
    })
})


function calculation(num){
    if(display.value!=""){
        temp=display.value
    }

    if(num=="AC"){
        storage=[]
        result=0
        display.value=result
    }
    else if(num=="CLR"){
        storage.pop()
        temp=storage.join("")
        display.value=temp
    }
    else if(num=="="){
        result=eval(temp)
        display.value=result
    }
   
    else{
        storage.push(num)
        temp=storage.join("")
        display.value=temp
    }

    // storage.push(num)
    // var temp=storage.join("")
    // result=eval(temp)

   
}















// var storage=["1","2","3","4"]
// var strig=["a","b"]
// var dummy=storage.map((e)=>{
//     return e
// })
// console.log(dummy)

// var mix=storage.join("")
// var ss=storage.join()
// console.log(mix,ss)

// var math=[1,2,3,"*",5]
// var mathJoin=math.join("")
// console.log(mathJoin)


// var a=["a",2,3]
// var aa=a.join("")
// console.log(aa)