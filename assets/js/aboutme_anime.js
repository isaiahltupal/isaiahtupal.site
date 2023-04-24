// this file deals with the Nerual network animation in about me
//aboutme_anime.css is needed for this to work

var canvas = $("#aboutme_canvas" )[ 0 ];
var red = $(":root").css("--red");
var yellow = $(":root").css("--green");
var blue = $(":root").css("--blue");
var light_gray = $(":root").css("--light_gray");

//generates an array of div representing a line of code
function generate_line_code(){

    block1 = document.createElement("div");
    block1.setAttribute("class","block1");

    
    block2 = document.createElement("div");
    block2.setAttribute("class","block2");


    block3 = document.createElement("div");
    block3.setAttribute("class","block3");

    line_wrapper = document.createElement("div");
    line_wrapper.setAttribute("class","line_code");
    line_wrapper.append(block1,block2,block3);
    line_wrapper.setAttribute("style","text-align:left");

    return line_wrapper;
}

function random_width(element){
    let width = Math.random()*9 + 1 
    element.setAttribute("style",`width: ${width}em`);
    return element;
}



//add eight lines of code here
for(i = 0; i<8;i++){
    linecode = generate_line_code();

    for(j=0;j<3;j++){
        linecode.childNodes[j]= random_width(linecode.childNodes[j]);
    }

    if(i==7){
        cursor = document.createElement("div");
        cursor.setAttribute("class","cursor_box");
        linecode.append(cursor);
    }
    canvas.append(linecode);
}


//function to scroll up
function code_animation_loop(){
    canvas.removeChild($(".line_code")[0]);
    
    if($(".cursor_box").length){
        $(".cursor_box")[0].remove();
    }


    linecode = generate_line_code();

    for(j=0;j<3;j++){
        linecode.childNodes[j]= random_width(linecode.childNodes[j]);
        console.log(linecode.childNodes[j]);
    }

    cursor = document.createElement("div");
    cursor.setAttribute("class","cursor_box");
    linecode.append(cursor);
    
    canvas.append(linecode);

    var cursor = anime.timeline({
        delay: 100,
        duration: 100,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
      })
      .add({ targets: '.cursor_box',  background: '	rgba(158,206,88,0)' }, 0)
}


var cursor = anime.timeline({
    delay: 100,
    duration: 100,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad'
  })
  .add({ targets: '.cursor_box',  background: '	rgba(158,206,88,0)' }, 0)
//cursor


setInterval(code_animation_loop, 1000);

