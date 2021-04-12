
var currentcolor='red'
var currentcolor2='orange'
var currentcolor3='pink'
var currentcolor4='lightgreen'
var currentcolor5='lightblue'



var currentX=0;
var currentY=-1000;



function generateSpots(){
    var spots = $('.spot')
    var currentDegree = Math.random()*360;
    var currentSaturation = Math.random()*100;

 
        // currentcolor=color;

       for(let i=0;i<$(spots).length;i++){
        //    console.log(i)
           setTimeout(() => {
               $(spots[i]).css('background-color','hsla('+currentDegree+','+currentSaturation+'%, 70%,100%)')
               
           },i*20);

        }
    }
    

function generateTentacles1(e){
    var tentacle = $('.tentaclePiece')

    for(let i=0;i<tentacle.length;i++){
        setTimeout(() => {
            
        
        $(tentacle[i]).css('top',e.pageY+20+i*40)
        $(tentacle[i]).css('left',e.pageX+50+i*5);
        $(tentacle[i]).css('background-color',currentcolor)

    }, i*20);

    }
} 
function generateTentacles2(e){
    var tentacle = $('.tentaclePiece2')

    for(let i=0;i<tentacle.length;i++){
        setTimeout(() => {
            
        
        $(tentacle[i]).css('top',e.pageY+20+i*40)
        $(tentacle[i]).css('left',e.pageX);
        $(tentacle[i]).css('background-color',currentcolor2)

    }, i*20);

    }
} 

function generateTentacles3(e){
    var tentacle = $('.tentaclePiece3')

    for(let i=0;i<tentacle.length;i++){
        setTimeout(() => {
            
        
        $(tentacle[i]).css('top',e.pageY+20+i*40)
        $(tentacle[i]).css('left',e.pageX-50-i*5);
        $(tentacle[i]).css('background-color',currentcolor3)

    }, i*20);

    }
} 

function generateTentacles5(e){
    var tentacle = $('.tentaclePiece5')

    for(let i=0;i<tentacle.length;i++){
        setTimeout(() => {
            
        
        $(tentacle[i]).css('top',e.pageY+20+i*40)
        $(tentacle[i]).css('left',e.pageX+100+i*5);
        $(tentacle[i]).css('background-color',currentcolor5)

    }, i*20);

    }
} 
function generateTentacles4(e){
    var tentacle = $('.tentaclePiece4')

    for(let i=0;i<tentacle.length;i++){
        setTimeout(() => {
            
        
        $(tentacle[i]).css('top',e.pageY+20+i*40)
        $(tentacle[i]).css('left',e.pageX-100-i*5);
        $(tentacle[i]).css('background-color',currentcolor4)

    }, i*20);

    }
} 

$('body').mousemove(e=>{
    if(e.pageY<currentY-10){
        $('.jellyfishhead').removeClass('flapdown');
        $('.jellyfishhead').addClass('flapup');
    }
    else if(e.pageY>currentY+20){
        $('.jellyfishhead').removeClass('flapup')
        $('.jellyfishhead').addClass('flapdown');
    }

    currentX=e.pageX
    currentY=e.pageY
    $('.jellyfish').css('top',e.pageY-50)
    $('.jellyfish').css('left',e.pageX-150)
    generateSpots();
    generateTentacles1(e)
    generateTentacles2(e)
    generateTentacles3(e)
    generateTentacles4(e)
    generateTentacles5(e)
    $(window).scrollTop(e.pageY-500)
  
    // console.log('scrolltop')
    // console.log(body.scrollTop)

    
})

function generateRocks(){
    for(i=0;i<20;i++){
        var randSize =Math.floor( Math.random()*500);
        var top = Math.random()*100;
        var rotation=Math.random()*90;
        var rock = $('<dv>')
        rock.addClass('rock')
        rock.css('height',randSize)
        rock.css('width',randSize)
        rock.css('top',top+"%")
        rock.css('transform','rotate('+rotation+'deg)')
        $('.leftStone').append(rock)
     }
}
function generateRocks2(){
    for(i=0;i<20;i++){
        var randSize =Math.floor( Math.random()*500);
        var top = Math.random()*100;
        var rotation=Math.random()*90;
        var rock = $('<dv>')
        rock.addClass('rock')
        rock.css('height',randSize)
        rock.css('width',randSize)
        rock.css('top',top+"%")
        rock.css('transform','rotate('+rotation+'deg)')
        $('.rightStone').append(rock)
     }
}

function generateFish(){
    var school = $('<div>')
    school.addClass('fishPool')
    var schoolTop=Math.random()*100
    school.css('top',schoolTop+'%');
    var counter = 20
    
    for(let i=0;i<20;i++){
        
        var randColor = Math.random()*360;
        var top = Math.random()*100;
        var left = Math.random()*100;
        var fish = $('<div>')
        fish.addClass('fish')
        fish.css('top',top+"%")
        fish.css('left',left+"%")
        fish.css('background-color','hsla('+randColor+',100%, 70%,100%)')
        school.append(fish);
        counter--
}
    if (counter<1){
        console.log('fish')
        $('.water').prepend(school)
    }

}

function generateFish2(){
    var school = $('<div>')
    school.addClass('fishPool2')
    var schoolTop=Math.random()*100
    school.css('top',schoolTop+'%');
    var counter = 20
    
    for(let i=0;i<20;i++){
        
        var randColor = Math.random()*360;
        var top = Math.random()*100;
        var left = Math.random()*100;
        var fish = $('<div>')
        fish.addClass('fish')
        fish.css('top',top+"%")
        fish.css('left',left+"%")
        fish.css('background-color','hsla('+randColor+',100%, 70%,100%)')
        school.append(fish);
        counter--
}
    if (counter<1){
        console.log('fish')
        $('.water').prepend(school)
    }

}

// $('.water').click( e=>{
//     var scroll=e.pageY

//     $(window).scrollTop(scroll)
//     console.log(e.pageY)
//     console.log('scrolltop')
//     console.log($(window).scrollTop())
   

// })



generateSpots()
generateRocks()
generateRocks2()

setInterval(() => {
$('.fishPool').remove()
generateFish()
    
}, 8000);


setTimeout(() => {
setInterval(() => {
        $('.fishPool2').remove()
        generateFish2()
            
        }, 8000);
        
    
}, 4000);
