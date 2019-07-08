// class Tamagotchi {
//     constructor(name){
//         this.name = name;
//         this.age = 1;
//         this.hunger = 5;
//         this.boredom= 5;
//         this.sleepyness= 5;
//     }
// }

// class Bulbasaur extends Tamagotchi {
//     constructor(name){
//     super(name);}
//     run (){
//         $('#bulbasaur').css('display','block')
//         $('#bulbasaurRunning').css('display','block')
//         $('#bulbasaur').attr('src','bulbasuarImages/walking.gif')
//     }
//     eat (){
//         $('#bulbasaurRunning').css('display','none')
//         $('#bulbasaur').attr('src','bulbasuarImages/happy.gif')
//         $('#bulbasaur').css('display','block')

//     }
//     play(){
//         $('#bulbasaurRunning').css('display','none')
//         $('#bulbasaur').attr('src','bulbasuarImages/happyBulbasaur.gif')
//         $('#bulbasaur').css('display','block')

//     }
//     sleep(){
//         $('#bulbasaurRunning').css('display','none')
//         $('#bulbasaur').css('display','block')
//         if(timer % 2 === 0){
//         $('#bulbasaur').attr('src','bulbasuarImages/sleeping.gif')
//         } else {
//         $('#bulbasaur').attr('src','bulbasuarImages/sleeping2.gif')
//         }
//     }
//     dead(){
//         $('#bulbasaurRunning').css('display','none')
//         $('#bulbasaur').attr('src','bulbasuarImages/dead.png')
//         $('#bulbasaur').css('display','block')
//     }
// }

// const player = {
// }

// function submitPetName(event){
//     event.preventDefault()
//     const userInput = $("#submit").val()
//     console.log(userInput) 
//     player.newPet = new Bulbasaur(userInput);
//     $('#nowStart').css('display','block')
//     $('#submitPetName').css('display','none')
// }
// $("#submitPetName").on('submit', submitPetName);


// function startGame (){
//     $('.startPage').css('display','none');
//     $('#background').css('display','block');
//     $('#petName').text(`Name: ${player.newPet.name}`)
    
//     setTimeout(function(){
//         $('#eggHolder').attr('src','bulbasaurImages/smallB.gif');
//         $('#eggHolder').css({'margin-top': '250px'})
//         }, 5.18*1000);
//         setTimeout(function() {   
//             alert(`You've hatched a bulbasaur!`)
//             timePasses();
//         }, 7000);
//         setTimeout(function() {
//             $('#eggHolder').css('display','none');   
//             $('#bulbasaurRunning').css( 'display','block')
//         }, 7000);      
// }

// $('#hatchNow').click(function(){
//     if (player.newPet){
//     startGame();
//         } else {
//             alert("Please name your pet!")
//         }

// })

// let timer;
// let seconds = 0;
// function timePasses() {
//     timer = setInterval(function(){
//     seconds++;
//         $('#timer').text(`Timer: ${seconds}`)
//         if (seconds % 17 === 0){
//                 player.newPet.boredom++
//                 $('#boredom').text(`Boredom: ${player.newPet.boredom}`)
//                 player.newPet.hunger++
//                 $('#hunger').text(`Hunger: ${player.newPet.hunger}`)
//         } else if (seconds % 11 === 0){
//                 player.newPet.hunger++
//                 $('#hunger').text(`Hunger: ${player.newPet.hunger}`)
//         } else if(seconds % 13 === 0){
//                 player.newPet.sleepyness++
//                 $('#sleepyness').text(`Sleepyness: ${player.newPet.sleepyness}`)
//                 player.newPet.age++
//                 $('#petAge').text(`Age: ${player.newPet.age}`)
//         }
//             checkPetDeath();
//     }, 1000)
        
// }
// $('#feedPet').click( function(){
//     if(player.newPet.hunger>5){
//     player.newPet.hunger--
//     clearTimeout(walk);    
//     $('#hunger').text(`Hunger: ${player.newPet.hunger}`)
//     $('#eggHolder').attr('src','bulbasaurImages/happy.gif');
//     $('#bulbasaurRunning').css('display','none');   
//     $('#eggHolder').css('display','block');   
//     walking();
//     }
// })

// $('#playWithPet').click( function(){
//     if(player.newPet.boredom>5){
//     player.newPet.boredom--
//     clearTimeout(walk);    
//     $('#boredom').text(`Boredom: ${player.newPet.boredom}`)
//     // $('#eggHolder').attr('src','bulbasaurImages/happy.gif');
//     // $('#bulbasaurRunning').css('display','none');   
//     // $('#eggHolder').css('display','block');   
//     player.newPet.play();
//     walking();
//     }
// })

// $('#lightsOut').click( function(){
//     if(player.newPet.sleepyness >5){
//     player.newPet.sleepyness--
//     clearTimeout(walk);    
//     $('#sleepyness').text(`Sleepyness: ${player.newPet.sleepyness}`)
//     // $('#eggHolder').attr('src','bulbasaurImages/sleeping.gif');
//     // $('#bulbasaurRunning').css('display','none');   
//     // $('#eggHolder').css('display','block');   
//     player.newPet.sleep();
//     walking();
//     }
// })

// let walk;
// function walking() {
//     walk = setTimeout(function(){
//     $('#bulbasaurRunning').css('display','block');   
//     $('#eggHolder').css('display','none');
//     }, 3*1000);   
// }


// function checkPetDeath (){
//     if (player.newPet.hunger >= 10) {
//         petDies();
//         alert(`${player.newPet.name} dies of hunger!`)
//     } else if (player.newPet.boredom >= 10) {
//         petDies();
//         alert(`${player.newPet.name} dies of boredom!`)
//     } else if (player.newPet.sleepyness >= 10) {
//         petDies();
//         alert(`${player.newPet.name} died from being too sleepy!`)
//     }
// }
    
// function petDies() {
//     clearInterval(timer);
//     clearTimeout(walk);    
//     $('#bulbasaurRunning').css('display','none')
//     $('#eggHolder').attr('src','bulbasaurImages/dead.png');
//     $('#eggHolder').css('display','block');   
// }



// const modal = document.getElementById("myModal");
// const btn = document.getElementById("myBtn");
// const span = document.getElementsByClassName("closeButton")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

























class Tamagotchi {
    constructor(name){
        this.name = name;
        this.age = 1;
        this.hunger = 5;
        this.boredom= 5;
        this.sleepyness= 5;
    }
}


class Bulbasaur extends Tamagotchi {
        constructor(name){
        super(name);}
        run (){
            $('#bulbasaur').css('display','block')
            $('#bulbasaurRunning').css('display','block')
            $('#bulbasaur').attr('src','bulbasuarImages/walking.gif')
        }
        eat (){
            $('#bulbasaurRunning').css('display','none')
            $('#bulbasaur').attr('src','bulbasuarImages/happy.gif')
            $('#bulbasaur').css('display','block')
        }
        play(){
            $('#bulbasaurRunning').css('display','none')
            $('#bulbasaur').attr('src','bulbasuarImages/happyBulbasaur.gif')
            $('#bulbasaur').css('display','block')
        }
        sleep(){
            $('#bulbasaurRunning').css('display','none')
            $('#bulbasaur').css('display','block')
            if(seconds % 2 === 0){
            $('#bulbasaur').attr('src','bulbasuarImages/sleeping.gif')
            } else {
            $('#bulbasaur').attr('src','bulbasuarImages/sleeping2.gif')
            }
        }
        dead(){
            $('#bulbasaurRunning').css('display','none')
            $('#bulbasaur').attr('src','bulbasuarImages/dead.png')
            $('#bulbasaur').css('display','block')
        }
        morph(){
            $('.slide-slow').css('display','none');   
            $('#eggHolder').attr('src','bulbasuarImages/morph1.png')
            $('#eggHolder').css('display','block')
        }
    }

const player = {
}

function submitPetName(event){
    event.preventDefault()
    const userInput = $("#submit").val()
    console.log(userInput) 
    player.newPet = new Tamagotchi(userInput);
    $('#nowStart').css('display','block')
    $('#submitPetName').css('display','none')
}
$("#submitPetName").on('submit', submitPetName);


function startGame (){
    $('.startPage').css('display','none');
    $('#background').css('display','block');
    $('#petName').text(`Name: ${player.newPet.name}`)
    
    setTimeout(function(){
        $('#eggHolder').attr('src','bulbasaurImages/smallB.gif');
        $('#eggHolder').css({'margin-top': '250px'})
        }, 5.18*1000);
        setTimeout(function() {   
            alert(`You've hatched a bulbasaur!`)
            timePasses();
        }, 7000);
        setTimeout(function() {
            $('#eggHolder').css('display','none');   
            $('.slide-slow').css( 'display','block')
        }, 7000);      
}

$('#hatchNow').click(function(){
    if (player.newPet){
    startGame();
        } else {
            alert("Please name your pet!")
        }

})

let timer;
let seconds = 0;
function timePasses() {
    timer = setInterval(function(){
    seconds++;
        $('#timer').text(`Timer: ${seconds}`)
        if (seconds % 17 === 0){
                player.newPet.boredom++
                $('#boredom').text(`Boredom: ${player.newPet.boredom}`)
        } else if (seconds % 11 === 0){
                player.newPet.hunger++
                $('#hunger').text(`Hunger: ${player.newPet.hunger}`)
        } else if(seconds % 13 === 0){
                player.newPet.sleepyness++
                $('#sleepyness').text(`Sleepyness: ${player.newPet.sleepyness}`)
                player.newPet.age++
                $('#petAge').text(`Age: ${player.newPet.age}`)
        }
            checkPetDeath();
            morph();
    }, 1000)
        
}
$('#feedPet').click( function(){
    if(player.newPet.hunger>3){
    player.newPet.hunger--
    clearTimeout(walk);    
    $('#hunger').text(`Hunger: ${player.newPet.hunger}`)
    $('#eggHolder').attr('src','bulbasaurImages/happy.gif');
    endWalking();
    walking();
    }
})

$('#playWithPet').click( function(){
    if(player.newPet.boredom>3){
    player.newPet.boredom--
    clearTimeout(walk);    
    $('#boredom').text(`Boredom: ${player.newPet.boredom}`)
    $('#eggHolder').attr('src','bulbasaurImages/happy.gif');
    endWalking();
    walking();
    }
})

$('#lightsOut').click( function(){
    if(player.newPet.sleepyness >3){
    player.newPet.sleepyness--
    clearTimeout(walk);    
    $('#sleepyness').text(`Sleepyness: ${player.newPet.sleepyness}`)
    $('#eggHolder').attr('src','bulbasaurImages/sleeping.gif');
    // if(timer % 2 === 0){
    //     $('#eggHolder').attr('src','bulbasaurImages/sleeping.gif')
    //     } else {
    //     $('#eggHolder').attr('src','bulbasaurImages/sleeping2.gif')
    //     }
    endWalking();
    walking();
    }
})

function endWalking(){
    $('.slide-slow').css('display','none');   
    $('#eggHolder').css('display','block');   
}

let walk;
function walking() {
    walk = setTimeout(function(){
    $('.slide-slow').css('display','block');   
    $('#eggHolder').css('display','none');
    }, 3*1000);   
}

function morph(){
    if(seconds === 50){
    clearTimeout(walk);    
    endWalking();
    $('#eggHolder').attr('src','bulbasaurImages/morph1.gif')
    alert("You're Bulbasaur has transformed into a Ivysaur!")
    setTimeout(function(){
        $('.walk').attr('src','bulbasaurImages/ivysaur4.gif')
        $('.slide-slow').css('display','block');   
        $('#eggHolder').css('display','none');
        }, 3*1000);   
    } else if (seconds === 100){
        clearTimeout(walk);    
    endWalking();
    $('#eggHolder').attr('src','bulbasaurImages/morph2.gif')
    alert("You're Ivysaur has transformed into a Venasaur!")
    setTimeout(function(){
        $('.walk').attr('src','bulbasaurImages/venasaur1.gif')
        $('.slide-slow').css('display','block');   
        $('#eggHolder').css('display','none');
        }, 3*1000);   
    }
}

function checkPetDeath (){
    if (player.newPet.hunger >= 10) {
        petDies();
        alert(`${player.newPet.name} dies of hunger!`)
    } else if (player.newPet.boredom >= 10) {
        petDies();
        alert(`${player.newPet.name} dies of boredom!`)
    } else if (player.newPet.sleepyness >= 10) {
        petDies();
        alert(`${player.newPet.name} died from being too sleepy!`)
    }
}
    
function petDies() {
    clearInterval(timer);
    clearTimeout(walk);        
    $('#eggHolder').attr('src','bulbasaurImages/dead.png');
    endWalking();
}



const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("closeButton")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
