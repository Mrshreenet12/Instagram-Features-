// Right Container

var istatus = document.querySelector("#status");
var btn = document.querySelector("#button");


var check =0;

btn.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML = "Friends"
        istatus.style.color="green"
        btn.innerHTML="Remove Friend"
        check=1;
    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        btn.innerHTML="Add Friend"
        check=0;
    }

})

// Main Container

var con = document.querySelector(".posts")
var love = document.querySelector("i")
var chec=0;

con.addEventListener("dblclick",function(){
    console.log("Hello");
    love.style.transform="translate(-50%,-50%) scale(1)";
    setTimeout(function(){
        love.style.transform="translate(-50%,-50%) scale(0)";
    },2000);
});


// STORIES SECTION  

var arr = [
    {dp:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1668386697132-ac0cce08969d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0JTIwaW1hZ2VzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1668387637891-14a5f5fc9146?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0JTIwaW1hZ2VzfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1506464253090-7af30fe60a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"}

];

var stories = document.querySelector("#stories")

var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id=${idx} src="${elem.dp}" alt="">
</div>`
})

// console.log(clutter)
document.querySelector("#stories").innerHTML = clutter

stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
});


