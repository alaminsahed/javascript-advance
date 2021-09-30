var imgs =["./image/1.jpg","./image/2.jpg","./image/3.jpg","./image/4.jpg"];


var image = document.querySelector("img");

var count = 0;

const next = ()=>{
    count++;
    if(count>=imgs.length)
    {
        count=0;
        image.src = imgs[count];
    }
    else{
        image.src = imgs[count];
    }
}

// slide will be change after 5s.
// setInterval( function next(){
//     count++;
//     if(count>=imgs.length)
//     {
//         count = 0;
        
//         image.src= imgs[count];
//     }
//     else{
//         image.src= imgs[count];
//     }
    

// },5000)

const prev = ()=>{
    count--;
    if(count<0)
    {
        count = imgs.length-1;
        image.src = imgs[count];
    }
    else{
        image.src = imgs[count];
    }
}
