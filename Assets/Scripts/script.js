var deleteit = document.getElementById("loadingcss")
deleteit.remove()
var opentext = document.getElementById("opentext")
var times = 0
var startism;
var static = document.getElementById("static")
var cams = document.getElementById("camera")
var flipcam = document.getElementById("flipcams")
var lookat = "startload"
var theonemule = document.getElementById("baboon")
var checkmark = document.getElementById("settingscheck")
var gron = document.getElementById("settingsgreen")
var skipintro = false
var ingame = false
var newspaper = document.getElementById("newspaper")
var officeambience = document.getElementById("bzzzz")
var camthing = document.getElementById("camerathing")
var test;
var swithccam = document.getElementById("click")
setup()
var doorbutton1 = document.getElementById("doorbutton1")
skipintro = localStorage.getItem("skip")
var door1 = document.getElementById("officedoor1")
var office = document.getElementById("office1")
var screenfull = document.documentElement
var idontknow = 0
var map = document.getElementById("map")
var stupid;
var rightbutton = document.getElementById("buttonright")
var buttonleft = document.getElementById("buttonleft")
var selectedcam = "1A"
var rightlighton = false
var rightdoorclose = false
var leftlighton = false
var leftdoorclosed = false
var doorright = 0
var rightglow = 0
var doorleft = 0
var leftglow = 0
var dooranimplaying = false
var bonniepos = "1A"
var chicapos = "1A"
var freddypos = "1A"
var foxypos = "2"
var bonnielvl = 20
var chicalvl = 20
var nose = document.getElementById("boop")
var boop = document.getElementById("beep")
var rightdoorimg = document.getElementById("rightdoor")
// < -155% showbutton
function honk() {
   if (lookat == "office") {
      boop.play()
   }
}
function rightdoor() {
   if (lookat == "office"&&rightbutton.style.display == "block") {
    if (ypos < 61&&dooranimplaying == false) {
      if (rightdoorclose == false&&poweroff == false)  {
       shutright()
         decreaseby += 2.5
       doorright = 1
       dooranimplaying = true
        clearTimeout(deathtimerfunc2)
       rightdoorclose = ""
      } else if (rightdoorclose&&poweroff == false) {
         shutrightreverse()
         doorright = 0
         decreaseby -= 2.5
         leftdoorimg.style.display = "none"
         rightdoorclose = ""
         if (chicapos == "door") {
            deathtimerfunc2 = setTimeout(dietimechica,1500)
         }
         dooranimplaying = true
      }
    } else if (ypos > 85) {
       if (rightlighton == false&&poweroff == false) {
         rightlighton = true
         lightright()
          decreaseby += 2.5
         rightglow = 1
         rightbutton.src = "Assets/Images/right" + rightglow + "" + doorright + ".png"
       } else if (rightlighton&&poweroff == false){
          decreaseby -= 2.5 
         rightglow = 0
         rightbutton.src = "Assets/Images/right" + rightglow + "" + doorright + ".png"
         rightlighton = false
         clearInterval(rightlight)
         office.src = "Assets/Images/office2.svg"
         setTimeout(flashrightchica2,50)
       }
    }  
   }
}
function savenight() {
   localStorage.setItem("night",night)
}
function leftdoor() {
   console.log(ypos)
   if (lookat == "office"&&buttonleft.style.display == "block") {
    if (leftypos < 61&&dooranimplaying == false) {
      if (leftdoorclosed == false&&poweroff == false)  {
       shutleft()
         decreaseby += 2.5 
       leftdoorimg.style.display = "block"
       doorleft = 1
       dooranimplaying = true
        clearTimeout(deathtimerfunc)
       leftdoorclosed = ""
      } else if (leftdoorclosed&&poweroff == false) {
         shutleftreverse()
         decreaseby -= 2.5
         if (bonniepos == "door") {
            deathtimerfunc = setTimeout(dietimebonnie,1500)
         }
         doorleft = 0
         leftdoorclosed = ""
         dooranimplaying = true
      }
    } else if (leftypos > 85) {
       if (leftlighton == false&&poweroff == false) {
         leftlighton = true
          decreaseby += 2.5
         lightleft()
         leftglow = 1
         buttonleft.src = "Assets/Images/left" + leftglow + "" + doorleft + ".png"
       } else if (leftlighton&&poweroff == false){
          decreaseby -= 2.5
         leftglow = 0
         buttonleft.src = "Assets/Images/left" + leftglow + "" + doorleft + ".png"
         leftlighton = false
         clearInterval(leftlight)
         office.src = "Assets/Images/office2.svg"
         setTimeout(flashleftbonnie2,50)
       }
    }  
   }
}

function shutrightreverse() {
   imgflip = setInterval(doorclosereverse,35)
}
function shutleftreverse() {
   leftimgflip = setInterval(leftdoorclosereverse,35)
}
function leftdoorclosereverse() {
   leftsomething = leftsomething - 1
   var filetype = ".png"
   if (something < 14) {
      leftdoorimg.style.height = ""
   }
   leftdoorimg.src = "Assets/Images/door/door" + leftsomething + filetype

   if (leftsomething <= 1) {
      buttonleft.src = "Assets/Images/left" + leftglow + "" + doorleft + ".png"
      dooranimplaying = false
      leftdoorclosed = false
      leftdoorimg.style.display = "none"
      clearInterval(leftimgflip)
   }
}
function doorclosereverse() {
   something -= 1
   var filetype = ".png"
   if (something < 14) {
      rightdoorimg.style.height = ""
   }
   rightdoorimg.src = "Assets/Images/door/rightdoor" + something + filetype
   leftdoorimg.style.display = "none"
   if (something <= 1) {
      rightbutton.src = "Assets/Images/right" + rightglow + "" + doorright + ".png"
      dooranimplaying = false
      rightdoorclosed = false
      rightdoorimg.style.display = "none"
      clearInterval(imgflip)
   }
}
function shutright() {
   doorclose2()
   rightdoorimg.style.display = "block"
}
function shutleft() {
   leftdoorclose2()
   leftdoorimg.style.height = ""
}
var imgflip;
var leftimgflip;
function doorclose2() {
   imgflip = setInterval(doorclose,35)
}
function leftdoorclose2() {
   leftimgflip = setInterval(leftdoorclose,35)
}
var leftdoorimg = document.getElementById("leftdoor")
var something = 0
var leftsomething = 0
function leftdoorclose() {
   leftsomething = leftsomething + 1
   var filetype = ".png"
   leftdoorimg.src = "Assets/Images/door/door" + leftsomething + filetype

   if (leftsomething >= 14) {
      buttonleft.src = "Assets/Images/left" + leftglow + "" + doorleft + ".png"
      dooranimplaying = false
      leftdoorclosed = true
      lag = true
      leftdoorimg.style.height = "100%" 
      clearInterval(leftimgflip)
   }
}
function doorclose() {
   something += 1
   var filetype = ".png"
   rightdoorimg.src = "Assets/Images/door/rightdoor" + something + filetype

   if (something >= 14) {
      rightbutton.src = "Assets/Images/right" + rightglow + "" + doorright + ".png"
      dooranimplaying = false
      rightdoorclose = true
      rightdoorimg.style.height = "100%"
      rightdoorimg.style.left = "69%" 
      clearInterval(imgflip)
   }
}
var seenchicathisnight = false
var seenbonniethisnight = false
var scary = document.getElementById("light")
var rightlight;
function lightright() {
   if (chicapos == "door"&&seenchicathisnight == false) {
   rightlight = setInterval(flashrightchica1,200)
   office.src = "Assets/Images/officechica.svg"
      seenchicathisnight = true
      scary.play()
   } else if (chicapos == "door"&&seenchicathisnight) {
      rightlight = setInterval(flashrightchica1,200)
      office.src = "Assets/Images/officechica.svg"
   } else if (chicapos != "door") {
      office.src = "Assets/Images/officerightlight.svg"
      rightlight = setInterval(flashrightnochica1,200)
   }
}
var leftlight;
function lightleft() {
   if (bonniepos == "door"&&seenbonniethisnight == false) {
   leftlight = setInterval(flashleft,200)
   office.src = "Assets/Images/officebonnie.svg"
      seenbonniethisnight = true
      scary.play()
   } else if (bonniepos == "door"&&seenbonniethisnight) {
      leftlight = setInterval(flashleft,200)
      office.src = "Assets/Images/officebonnie.svg"
   } else if (bonniepos != "door") {
      office.src = "Assets/Images/officeleftlight.svg"
      leftlight = setInterval(flashleft,200)
   }
}
function flashleft() {
   if (bonniepos != "door") {
   office.src = "Assets/Images/officeleftlight.svg"
   } else if (bonniepos == "door") {
      office.src = "Assets/Images/officebonnie.svg"
   }
      setTimeout(flashleft2,100)
}
function flashleft2() {
   office.src = "Assets/Images/office2.svg"
}
function flashleftbonnie1() {
   office.src = "Assets/Images/officebonnie.svg"
   setTimeout(flashleftbonnie2,100)
}
function flashleftbonnie2() {
   office.src = "Assets/Images/office2.svg"
}
function flashrightchica1() {
   office.src = "Assets/Images/officechica.svg"
   setTimeout(flashrightchica2,100)
}
function flashrightchica2() {
   office.src = "Assets/Images/office2.svg"
}
function flashrightnochica1() {
   office.src = "Assets/Images/officerightlight.svg"
   setTimeout(flashrightnochica2,100)
}
function flashrightnochica2() {
   office.src = "Assets/Images/office2.svg"
}
var xpos;
var ypos;
function mousexy(event) {
   xpos = event.offsetX
   ypos = event.offsetY
}
var leftxpos;
var leftypos;
function leftmousexy(event) {
   leftxpos = event.offsetX
   leftypos = event.offsetY
}
function bozo() {
   var usetop = camthing.style.top.replace("%","")
   var up = (parseInt(usetop * 10) - 50) / 10
   var filetype = ".svg"
   idontknow += 1
   if (idontknow > 1) {
   camthing.style.top = up + "%" 
   camthing.style.display = "block"
   } else if (idontknow == 1) {
      camthing.style.top = "43.2%"
      camthing.style.display = "block"
   } else if (idontknow == 6|| idontknow == 7) {
      up = (parseInt(usetop * 10) - 0) / 10
      camthing.style.top = up + "%" 
      camthing.style.display = "block"
   }
   
   if (idontknow >= 8) {
      filetype = ".png"
   }

   camthing.src = "Assets/Images/load" + idontknow + filetype
   
   if (idontknow >= 8) {
      clearInterval(test)
      setTimeout(tocams,35)
   }
}
var rng1;
function tocams() {
   if (selectedcam == "1A") {
      rng1 = badrng(5,0)
      updatecam = setInterval(updatecam1A,0)
   } else if (selectedcam == "1B") {
      updatecam = setInterval(updatecam1B,0)
   } else if (selectedcam == "1C") {
      updatecam = setInterval(updatecam1C,0)
   } else if (selectedcam == "5") {
      rng5 = badrng(4,0)
      updatecam = setInterval(updatecam5,0)
   } else if (selectedcam == "7") {
      rng7 = badrng(5,0)
      updatecam = setInterval(updatecam7,0)
   } else if (selectedcam == "3") {
      updatecam = setInterval(updatecam3,0)
   } else if (selectedcam == "4A") {
      rng4A = badrng(20,0)
      updatecam = setInterval(updatecam4A,0)
   } else if (selectedcam == "4B") {
      updatecam = setInterval(updatecam4B,0)
   } else if (selectedcam == "2A") {
      updatecam = setInterval(updatecam2A,0)
   } else if (selectedcam == "2B") {
      updatecam = setInterval(updatecam2B,0)
   }
   buttonright.style.zIndex = "-100"
   officeambience.pause()
   officeambience.load()
   wrrrr.play()
   flipcam.play()
      map.style.display = "block"
      static.style.display = "block"
      stupid = setInterval(cyclestatic,25)
      camframe.style.display = "block"
      camframe.style.animationPlayState = "running"
      camthing.style.display = "none"
      idontknow = 8
   lookat = "cams"
   office.style.display = "none"
  
}
var thisthing = 0
function cyclestatic() {
   var filetype = ".png"
    thisthing += 1
   static.src = "Assets/Images/static" + thisthing + filetype
   if (thisthing >= 7) {
      thisthing = 0
   }
}
function bozoreverse() {
   var usetop = camthing.style.top.replace("%","")
   var up = (parseInt(usetop * 10) + 95) / 10
   var filetype = ".svg"
   idontknow -= 1
   if (idontknow < 8&& idontknow != 1) {
   camthing.style.top = up + "%" 
   camthing.style.display = "block"
   } else if (idontknow == 1) {
      camthing.style.top = "43.2%"
      camthing.style.display = "block"
   } else if (idontknow == 6|| idontknow == 7) {
      up = (parseInt(usetop * 10) - 0) / 10
      camthing.style.top = up + "%" 
      camthing.style.display = "block"
   }
   
   if (idontknow >= 8) {
      filetype = ".png"
   }
   camthing.src = "Assets/Images/load" + idontknow + filetype
   if (idontknow <= 1) {
      camthing.style.display = "none"
      clearInterval(test)
      idontknow = 0
   }
}
function setup() {
    opentext.innerHTML = "WAIT <br> CLICK <br> THIS"
}
function startingism() {
    if (opentext.innerHTML == "WAIT <br> CLICK <br> THIS") {
    if (skipintro == "true") {
      opentext.innerHTML = ""
       opentext.style.cursor = "default"
   screenfull.requestFullscreen()
    times = 0
   start5()
    } else if (skipintro !== "true") {
      times = 0
       opentext.style.cursor = "default"
   screenfull.requestFullscreen()
    opentext.innerHTML = ""
    startism = setInterval(start,25)
    }
   } else if (opentext.innerHTML == "Skip intro thing &lt;&lt;&lt;") {
      if (skipintro == "true") {
      skipintro = "false"
      gron.style.background = "red"
      localStorage.setItem("skip","false")
   } else if (skipintro !== "true") {
      skipintro = "true"
      gron.style.background = "limegreen"
      localStorage.setItem("skip","true")
   }
}
}
function mousething() {
   if (opentext.innerHTML == "WAIT <br> CLICK <br> THIS") {
     opentext.style.cursor = "pointer"
   }
}
function leavething() {
   if (opentext.innerHTML == "WAIT <br> CLICK <br> THIS") {
   opentext.style.cursor = "default"
   }
}
function start() {
    var texting = ["I"," ","g","o","t"," ","b","o","r","e","d"," ","a","g","a","i","n"]
    opentext.innerHTML += texting[times]
    times += 1 
    if (times == texting.length) {
       clearInterval(startism)
       setTimeout(startthing,1000)
       times = 0
    }
}
function startthing() {
   startism = setInterval(start2,25)
   opentext.innerHTML = ""
}
function start2() {
   var texting = ["S","o"," ","I"," ","p","r","e","s","e","n","t"," ","t","o"," ","y","o","u"]
   opentext.innerHTML += texting[times]
   times += 1
   if (times == texting.length) {
      clearInterval(startism)
      times = 0
      setTimeout(startthing2,1000)
   }
}
function startthing2() {
   startism = setInterval(start3,25)
   opentext.innerHTML = ""
}
function start3() {
   var texting = ["A", " ","r","e","a","l"," ","g","a","m","e"," ","(","s","o","m","e","h","o","w",")"]
   opentext.innerHTML += texting[times]
   times += 1

   if (times == texting.length) {
      clearInterval(startism)
      setTimeout(startthing3,1000)
      times = 0
   }
}
function startthing3() {
   opentext.innerHTML = ""
   startism = setInterval(start4,25)
}
function start4() {
   var texting = ["M","a","d","e"," ","a","g","a","i","n"," ","b","y"," ","t","h","i","s"," ","b","a","b","o","o","n"]
   opentext.innerHTML += texting[times]
   times += 1
   if (times == texting.length) {
      times = 0
      theonemule.style.display = "block"
      clearInterval(startism)
      setTimeout(startthing4,1000)
   }
}
function startthing4() {
   opentext.innerHTML = ""
   theonemule.style.display = "none"
   start5()
}
function start5() {
   var rannum = Math.floor((Math.random() * 3) + 1)
   if (rannum == 1) {
      startism = setInterval(start5one,25)
   } else if (rannum == 2) {
      startism = setInterval(start5two,25)
   } else if (rannum == 3) {
      startism = setInterval(start5three,25)
   }
}
function start5one() {
    var texting = ["S","u","r","v","i","v","e"," ","t","h","e"," ","n","i","g","h","t"]
      opentext.innerHTML += texting[times]
      times += 1 
      if (times == texting.length) {
         clearInterval(startism)
         setTimeout(startgame,750)
      }
}
function start5two() {
   var texting = ["W","o","w"," ","i","t","'","s"," ","a","c","t","u","a","l","l","y"," ","c","e","n","t","e","r","e","d"," ","-"," ","Y","o","u"]
   opentext.innerHTML += texting[times]
   times += 1
   if (times == texting.length) {
      clearInterval(startism)
      setTimeout(startgame,750)
   }
}
function start5three() {
   var texting = ["T","i","m","e"," ","t","o"," ","s","p","e","n","d"," ","a","n","o","t","h","e","r"," ","3","+"," ","m","o","n","t","h","s"]
   opentext.innerHTML += texting[times]
   times += 1
   if (times == texting.length) {
      clearInterval(startism)
      setTimeout(startgame,750)
   }
}
var finishintro = false
var conttext;
var settings; 
var insettings = false
function startgame() {
   finishintro = true 
   insettings = false 
   opentext.innerHTML = "New Game"
   opentext.style.left = "100px"
   opentext.style.top = "200px"
   opentext.style.cursor = "pointer"
   conttext = document.createElement("p")
   settings = document.createElement("p")
   settings.innerHTML = "Settings"
   conttext.className = "text"
   settings.className = "text"
   conttext.innerHTML = "Continue"
   document.body.appendChild(conttext)
   document.body.appendChild(settings)
   conttext.style.left = "100px"
   conttext.style.top = "335px"
   settings.style.cursor = "pointer"
   settings.style.left = "100px"
   settings.style.top = "470px"
   conttext.style.cursor = "pointer"
   conttext.addEventListener("mouseover", function() {
     if (finishintro&&insettings == false) {
       conttext.innerHTML = "Continue <<<"
     } 
    })
     conttext.addEventListener("mouseleave", function() {
   if (finishintro&&insettings == false) {
      conttext.innerHTML = "Continue"
    }  
  })
 settings.addEventListener("mouseover", function() {
     if (finishintro&&insettings == false) {
       settings.innerHTML = "Settings <<<"
     } else if (finishintro&&insettings) {
        settings.innerHTML = "Back <<<"
     }
    })
     settings.addEventListener("mouseleave", function() {
   if (finishintro&&insettings == false) {
      settings.innerHTML = "Settings"
    } else if (finishintro&&insettings) {
      settings.innerHTML = "Back"
    }
  })
 settings.addEventListener("click", function() {
     if (finishintro&&insettings == false) {
        console.log("Open settings") 
        conttext.innerHTML = ""
        insettings = true 
        gron.style.display = "block"
        checkmark.style.display = "block"
        settings.innerHTML = "Back"
        opentext.innerHTML = "Skip intro thing"
        if (skipintro == "true") {
           gron.style.background = "limegreen"
        } else if (skipintro != "true") {
         gron.style.background = "red"
        }
     } else if (finishintro&&insettings) {
         insettings = false
         gron.style.display = "none"
         checkmark.style.display = "none"
         opentext.innerHTML = "New Game"
        conttext.innerHTML = "Continue"
        settings.innerHTML = "Settings"
     }
    })
conttext.addEventListener("click", continuegame)
}

function mouseovernew() {
   if (finishintro&&insettings == false&&ingame == false) {
      opentext.innerHTML = "New Game <<<"
   } else if (finishintro&&insettings&&ingame == false) {
      opentext.innerHTML = "Skip intro thing <<<"
   }
}
function mouseleavenew() {
   if (finishintro&&insettings == false&&ingame == false) {
      opentext.innerHTML = "New Game"
   } else if (finishintro&&insettings&&ingame == false) {
      opentext.innerHTML = "Skip intro thing"
   }
}
var newpaper = badrng(1000,1)
function newgame() {
   if (finishintro&&insettings == false&&ingame == false) {
      conttext.remove()
      night = 1
      settings.remove()
      ingame = true 
      newspaper.style.display = "block"
      newspaper.style.opacity = "0"
      lookat = "newspaper"
      if (newpaper == 3) {
         newspaper.src = "Assets/Images/newsdalton.png"
      } else {
         newspaper.src = "Assets/Images/newspaper.png"
      }
      newspaper.style.animation = "glide 8s"
      opentext.innerHTML = ""
      setTimeout(actualnewgame,8000)
   }
}
var night;
var deletelater;
var minutes = 1
var hours = 6
var int;
function actualnewgame() {
   deletelater = document.createElement("p")
   deletelater.className = "text"
   var variable = minutes - 1 + "" + 0
   deletelater.innerHTML = hours + ":" + variable + " AM"
   deletelater.innerHTML = "6:00 AM"
   document.body.appendChild(deletelater)
   opentext.innerHTML = "Night " + night
   opentext.style.top = "200px"
   lookat = "Nightandtime"
   opentext.style.left = ""
  setTimeout(waitsecond,1000)
}
function waitsecond() {
   hours = 5
   int = setInterval(cooltime,7)
}
function cooltime() {
   minutes -= 1
   buttonleft.style.display = "none"
   buttonright.style.display = "none"
   var numonclock = minutes
   if (minutes < 10) {
      numonclock = 0 + "" + minutes
   }
   deletelater.innerHTML = hours + ":" + numonclock + " AM"
   
   if (minutes == 0) {
    if (hours == 1) {
      hours = 12
      minutes = 59
    } else if (hours == 12) {
      minutes = "00"
      deletelater.innerHTML = hours + ":" + minutes + " AM"
      clearInterval(int)
      int = setInterval(beep,500)
      deletelater.style.display = "block"
      times = 0
    } else {
      hours -= 1
      minutes = 59
    }
   }
}
function beep() {
   times += 1
   if (deletelater.style.display == "block") {
      deletelater.style.display = "none"
   } else if (deletelater.style.display == "none") {
      deletelater.style.display = "block"
   }
   if (times == 6) {
      clearInterval(int)
      times = 0
      deletelater.style.display = "block"
      setTimeout(leavetime1,500)
   }
}
function leavetime1() {
   deletelater.style.animation = "disappear 3s"
   opentext.style.animation = "disappear 3s"
   setTimeout(leavetime2,2500)
}
var powerfunc;
var power = 100000 
var decreaseby = 2.5
function leavetime2() {
   opentext.style.animation = ""
   deletelater.style.opacity = "0"
   opentext.style.opacity = "0"
   lookat = "office"
   office.style.left = "-150%"
   office.style.display = "block"
   cams.style.opacity = "1"
   cams.style.display = "block"
   opentext.innerHTML = hours + ":00 AM"
   opentext.style.display = "block"
   opentext.style.left = "85%"
   opentext.style.top = "0%"
   energy.style.display = "block"
   opentext.style.opacity = "1"
   opentext.style.cursor = "default"
   opentext.style.zIndex = "999999"
   setTimeout(leavetime3,500)
}
var energy = document.getElementById("energy")
var time;
function leavetime3() {
   freddypos = "1A"
   chicapos = "1A"
   bonniepos = "1A"
   powerfunc = setInterval(decreasepower,10)
   time = setInterval(increasetime,45000)
   setTimeout(experimentalbonmove,10000)
   setTimeout(experimentalchicamove,10000)
   officeambience.play()
}
var poweroff = false
function decreasepower() {
   if (power > 0&&power != true) {
   power -= decreaseby
   var displaypower = Math.floor(power / 1000) + "%"
   energy.innerHTML = "Power: " + displaypower
   } else if (power < 1&&poweroff == false) {
      poweroff = true
      console.log("bozo")
      if (lookat == "camera") {
         test = setInterval(bozoreverse,30)
      }
      clearInterval(stupid)
      clearInterval(updatecam)
      cams.style.display = "block"
      camframe.style.display = "none"
      bonniepos = "powerout"
      chicapos = "powerout"
      foxypos = "powerout"
      freddypos = "powerout"
      clearInterval(deathtimerfunc)
      clearInterval(deathtimerfunc2)
      if (leftdoorclosed) {
         shutleftreverse()
         buttonleft.src = "Assets/Images/left00.png"
      } if (rightdoorclose) {
         shutrightreverse()
         buttonright.src = "Assets/Images/right00.png"
      }
      clearInterval(rightlight)
      clearInterval(leftlight)
      lookat = "office"
      energy.innerHTML = "Power: 0%"
   darkoffice()
      setTimeout(buttonoff,500)
      rightdoorimg.style.display = "none"
      setTimeout(dietimefreddypd,badrng(100000,140000))
      office.style.display = "block"
      map.style.display = "none"
      static.style.display = "none"
   }
}
function darkoffice() {
   office.src = "Assets/Images/powerout.svg"
}
function buttonoff() {
   buttonright.src = "Assets/Images/right00.png"
   buttonleft.src = "Assets/Images/left00.png"
}
function increasetime() {
   if (hours == 12) {
      hours = 1
      opentext.innerHTML = hours + ":00 AM"
   } else if (hours != 12&hours != 5) {
      hours += 1
      opentext.innerHTML = hours + ":00 AM"
   } else if (hours == 5) {
      clearInterval(time)
      youwin()
      hours = 6
   }
}
function youwin() {
   map.style.display = "none"
   selectedcam = "1A"
   energy.style.display = "none"
   clearInterval(powerfunc)
   decreaseby = 3
   power = 100000
   office.src = "Assets/Images/office2.svg"
   camthing.src = "Assets/Images/load1.svg"
   map.src = "Assets/Images/Cams/cammap/cammap1A.svg"
   officeambience.pause()
   officeambience.load()
   opentext.style.left = ""
   opentext.style.top = ""
   opentext.innerHTML = "5:00 AM"
   time = setInterval(timeupthing,50)
   clearTimeout(clearbon)
   clearTimeout(clearchica)
   clearInterval(updatecam)
   office.style.left = "-150%"
   camframe.style.display = "none"
   office.style.display = "none"
   static.style.display = "none"
      cams.style.display = "none"
   leftdoorimg.style.display = "none" 
   rightdoorimg.style.display = "none"
   rightbutton.style.display = "none"
   buttonleft.style.display = "none"
   rightdoorclose = false
   leftdoorclosed = false
   leftdoorimg.src = "Assets/Images/door/door1.png"
   rightdoorimg.src = "Assets/Images/door/rightdoor1.png"
   buttonleft.style.display = "none"
   minutes = 0
   night += 1
   lookat = "winscreen"
}
function timeupthing() {
   console.log(minutes)
   minutes = parseInt(minutes) + parseInt(1)
   if (minutes > 9) {
      minites = minutes
}else if (minutes < 10) {
      minutes = "0" + minutes 
   } if (minutes != 59) { 
   opentext.innerHTML = 5 + ":" + minutes + " AM"
}else if (minutes == 59) {
      minutes = 60
      hours = 6
      opentext.innerHTML = "6:00 AM"
      clearInterval(time)
      actualnewgame()
   }
}
function continuegame() {
   if (finishintro&&ingame == false) {
      night = localStorage.getItem("night")
      console.log(night)
      console.log("hey, that's pretty good")
   }
}
var bozo1;
var bozo2;
function fastright2() {
   if (lookat == "office") {
   console.log("yes")
  bozo1 = setInterval(fastright,25)
   }
}
function fastrightcancel() {
   clearInterval(bozo1)
}
function fastright() {
   var useleft = office.style.left.replace("%","")
   var right = useleft - 1
   if (useleft != -170) {
   office.style.left = right + "%"
   var useleft3 = nose.style.left.replace("%","")
   var right3 = parseInt(useleft3) - .8
   nose.style.left = right3 + "%"
   }
   if (useleft < -157&&useleft != -170) {
       var useleft2 = buttonright.style.left.replace("%","")
      var right2 = ((parseInt(useleft2) * 10) - 8) / 10
      buttonright.style.left = right2 + "%" 
      buttonright.style.display = "block"
   }
   if (useleft > -140&&useleft != -141) {
      var useleft2 = buttonleft.style.left.replace("%","")
      var right2 = ((parseInt(useleft2) * 10000000) - 10000001) / 10000000
     buttonleft.style.left = right2 + "%" 
     buttonleft.style.display = "block"
  }
   if (useleft < -140&&useleft != -130) {
     buttonleft.style.left = "-2.6%"
     buttonleft.style.display = "none"
  }
   if (useleft < -139&&useleft != -170&&rightdoorclose) {
      var useleft2 = rightdoorimg.style.left.replace("%","")
     var right2 = ((parseInt(useleft2) * 10) - 8) / 10
     rightdoorimg.style.left = right2 + "%" 
     rightdoorimg.style.display = "block"
  } 
  if (useleft == -170) {
     rightdoorimg.style.left = "69%"
  }
  if (useleft < -155) {
    leftdoorimg.style.display = "none"
    leftdoorimg.style.left = "-13%"
  } if (useleft > -155) {
   var useleft2 = leftdoorimg.style.left.replace("%","")
   var right2 = ((parseInt(useleft2) * 10) - 10) / 10
   leftdoorimg.style.left = right2 + "%" 
  }
}
function fastleftcancel() {
   clearInterval(bozo2)
}
function fastleft2() {
   if (lookat == "office") {
   bozo2 = setInterval(fastleft,25)
   }
}
var useleft4;
var right4
var timesincreased = 0
function fastleft() {
   var useleft = office.style.left.replace("%","")
   var right = parseInt(useleft) + 1
   if (useleft != -130) {
   office.style.left = right + "%"
   var useleft3 = nose.style.left.replace("%","")
   var right3 = parseInt(useleft3) + 1
   nose.style.left = right3 + "%"
   }
   if (useleft > -140&&useleft != -130) {
      var useleft2 = buttonleft.style.left.replace("%","")
     var right2 = ((parseInt(useleft2) * 10) + 10) / 10
     buttonleft.style.left = right2 + "%" 
     buttonleft.style.display = "block"
  }
    if (useleft < -157&&useleft != -170) {
       var useleft2 = buttonright.style.left.replace("%","")
      var right2 = ((parseInt(useleft2) * 10) + 17) / 10
      buttonright.style.left = right2 + "%" 
      buttonright.style.display = "block"
   } else if (useleft > -158&& useleft < -140) {
      buttonright.style.display = "none"
      buttonright.style.left = "99%"
   }
   if (useleft > -139&&useleft != -170&&rightdoorclose) {
     rightdoorimg.style.left = "97%"
     rightdoorimg.style.display = "none"
  } else {
   var useleft2 = rightdoorimg.style.left.replace("%","")
     var right2 = ((parseInt(useleft2) * 10) + 10) / 10
     rightdoorimg.style.left = right2 + "%" 
  }
  if (useleft > -156&&leftdoorclosed) {
   leftdoorimg.style.display = "block"
 }

 useleft = office.style.left.replace("%","")
  if (useleft > -156&&useleft != -130)  {
   timesincreased += 1
   console.log(timesincreased)
useleft4 = leftdoorimg.style.left.replace("%","")

 leftdoorimg.style.left = ((parseInt(leftdoorimg.style.left.replace("%","")) * 10) + 10) / 10 + "%"
     console.log(useleft4)
     console.log(right4)
}
}
var camsound = document.getElementById("wrrrr")
var camframe = document.getElementById("cameraframe")
var canusecams = true
function cameraupdown() {
   console.log("yes")
   if (lookat == "office"&&canusecams&&poweroff == false) {
   camthing.style.top = "42.2%"
   test = setInterval(bozo,30)
      canusecams = false
   setTimeout(waitcams,1000)
      decreaseby += 2.5
   buttonleft.style.opacity = "0"
   buttonright.style.opacity = "0"
   cams.src = "Assets/Images/camdown.svg"
   } else if (lookat == "cams"&&canusecams&&poweroff == false) {
      clearInterval(updatecam)
      decreaseby -= 2.5
      buttonleft.style.opacity = "1"
      buttonright.style.opacity = "1"
      cams.src = "Assets/Images/camup.svg"
      clearInterval(stupid)
      buttonright.style.zIndex = "100"
      map.style.display = "none"
      static.style.display = "none"
      camframe.style.display = "none"
      camframe.style.animationPlayState = "running"
      test = setInterval(bozoreverse,30)
      flipcam.play()
      officeambience.play()
      wrrrr.pause()
      wrrrr.load()
      lookat = "office"
      canusecams = false
      office.style.display = "block"
      setTimeout(waitcams,1000)
   }
}
var updatecam;
function updatecam1A() {
   if (bonniepos == "1A"&&chicapos == "1A"&&freddypos == "1A"&&rng1 != 3) {
      camframe.src = "Assets/Images/Cams/frames/1A-BCF.svg"
      } else if (bonniepos == "1A"&&chicapos != "1A"&&freddypos == "1A") {
         camframe.src = "Assets/Images/Cams/frames/1A-BF.svg"
      } else if (bonniepos != "1A"&&chicapos != "1A"&&freddypos == "1A"&&rng1 != 3) {
         camframe.src = "Assets/Images/Cams/frames/1A-F.svg"
      } else if (bonniepos != "1A"&&chicapos != "1A"&&freddypos != "1A") {
         camframe.src = "Assets/Images/Cams/frames/1A-.svg"
      } else if (bonniepos != "1A"&&chicapos == "1A"&&freddypos == "1A") {
         camframe.src = "Assets/Images/Cams/frames/1A-CF.svg"
      } else if (bonniepos != "1A"&&chicapos != "1A"&&freddypos == "1A"&&rng1 == 3) {
         camframe.src = "Assets/Images/Cams/frames/1A-F 1.svg"
      }  else if (bonniepos == "1A"&&chicapos == "1A"&&freddypos == "1A"&&rng1 == 3) {
         camframe.src = "Assets/Images/Cams/frames/1A-BCF 1.svg"
      }
}
function updatecam1B() {
   if (bonniepos == "1B"&&chicapos == "1B"&&freddypos == "1B") {
      camframe.src = "Assets/Images/Cams/frames/1B-BCF.svg"
      } else if (bonniepos == "1B"&&chicapos != "1B"&&freddypos == "1B") {
         camframe.src = "Assets/Images/Cams/frames/1B-BF.svg"
      } else if (bonniepos != "1B"&&chicapos != "1B"&&freddypos == "1B") {
         camframe.src = "Assets/Images/Cams/frames/1B-F.svg"
      } else if (bonniepos != "1B"&&chicapos != "1B"&&freddypos != "1B") {
         camframe.src = "Assets/Images/Cams/frames/1B-.svg"
      } else if (bonniepos != "1B"&&chicapos == "1B"&&freddypos == "1B") {
         camframe.src = "Assets/Images/Cams/frames/1B-CF.svg"
      } else if (bonniepos == "1B"&&chicapos != "1B"&&freddypos != "1B") {
         camframe.src = "Assets/Images/Cams/frames/1B-B.svg"
      } else if (bonniepos == "1B"&&chicapos == "1B"&&freddypos != "1B") {
         camframe.src = "Assets/Images/Cams/frames/1B-BC.svg"
      } else if (bonniepos != "1B"&&chicapos == "1B"&&freddypos != "1B") {
         camframe.src = "Assets/Images/Cams/frames/1B-C.svg"
      }
}
function updatecam1C() {
   if (foxypos == "0") {
   camframe.src = "Assets/Images/Cams/frames/1C-1.svg"
   } else if (foxypos == "1") {
   camframe.src = "Assets/Images/Cams/frames/1C-2.svg"
   } else if (foxypos == "2") {
   camframe.src = "Assets/Images/Cams/frames/1C-3.svg"
   } else {
      camframe.src = "Assets/Images/Cams/frames/1C-4.svg"
   }
}
function badrng(max,min) {
   max += 1
   return Math.floor(Math.random() * (max - min) ) + min
}
var rng5;
function updatecam5() {
   if (bonniepos == "5"&&rng5 != 2) {
      camframe.src = "Assets/Images/Cams/frames/5-B.svg"
   } else if (bonniepos != "5"&&rng5 == 2) {
      camframe.src = "Assets/Images/Cams/frames/5- 1.svg"
   } else if (bonniepos == "5"&&rng5 == 2) {
      camframe.src = "Assets/Images/Cams/frames/5-B 1.svg"
   } else {
      camframe.src = "Assets/Images/Cams/frames/5-.svg"
   }
}
var rng7;
function updatecam7() {
   if (chicapos != "7"&&freddypos != "7") {
   camframe.src = "Assets/Images/Cams/frames/7-.svg"
   } else if (chicapos == "7"&&freddypos != "7"&&rng7 != 3) {
   camframe.src = "Assets/Images/Cams/frames/7-C.svg"
   } else if (chicapos == "7"&&freddypos == "7") {
   camframe.src = "Assets/Images/Cams/frames/7-CF.svg"
   } else if (chicapos == "7"&&freddypos != "7"&&rng7 == 3) {
   camframe.src = "Assets/Images/Cams/frames/7-C 1.svg"
   }
}
function updatecam3() {
   if (bonniepos == "3") {
      camframe.src = "Assets/Images/Cams/frames/3-B.svg"
   } else if (bonniepos != "3") {
      camframe.src = "Assets/Images/Cams/frames/3-.svg"
   }
}
var rng2A;
function updatecam2A() {
   if (bonniepos != "2A"&&rng2A != 2) {
   camframe.src = "Assets/Images/Cams/frames/2A-.svg"
   } else if (bonniepos == "2A") {
      camframe.src = "Assets/Images/Cams/frames/2A-B.svg"
   } else if (bonniepos != "2A"&&rng2A == 2) {
      camframe.src = "Assets/Images/Cams/frames/2A- 1.svg"
   }
}
var rng2B;
function updatecam2B() {
   if (bonniepos != "2B"&&rng2B != 950&&rng2B != 951) {
   camframe.src = "Assets/Images/Cams/frames/2B-.svg"
   } else if (bonniepos == "2B") {
      camframe.src = "Assets/Images/Cams/frames/2B-B.svg"
   }
}
var rng4A;
function updatecam4A() {
   if (chicapos != "4A"&&freddypos != "4A"&&rng4A != 1&&rng4A != 2&&rng4A != 3) {
      camframe.src = "Assets/Images/Cams/frames/4A-.svg"
   } else if (chicapos == "4A"&&freddypos != "4A"&&rng4A != 3) {
      camframe.src = "Assets/Images/Cams/frames/4A-C.svg"
   } else if (chicapos == "4A"&&freddypos == "4A") {
      camframe.src = "Assets/Images/Cams/frames/4A-CF.svg"
   } else if (chicapos != "4A"&&freddypos == "4A") {
      camframe.src = "Assets/Images/Cams/frames/4A-F.svg"
   } else if (chicapos != "4A"&&freddypos != "4A"&&rng4A == 1) {
      camframe.src = "Assets/Images/Cams/frames/4A- 1.svg"
   } else if (chicapos != "4A"&&freddypos != "4A"&&rng4A == 2) {
      camframe.src = "Assets/Images/Cams/frames/4A- 2.svg"
   } else if (chicapos == "4A"&&freddypos != "4A"&&rng4A == 3) {
      camframe.src = "Assets/Images/Cams/frames/4A-C 1.svg"
   }
}
var rng4B;
function updatecam4B() {
   if (chicapos != "4B"&&freddypos != "4B"&&rng4B != 3&&rng4B != 2&&rng4B != 1) {
      camframe.src = "Assets/Images/Cams/frames/4B-.svg"
   } else if (chicapos == "4B"&&freddypos != "4B") {
      camframe.src = "Assets/Images/Cams/frames/4B-C.svg"
   } else if (chicapos == "4B"&&freddypos == "4B") {
      camframe.src = "Assets/Images/Cams/frames/4B-F.svg"
   } else if (chicapos != "4B"&&freddypos == "4B") {
      camframe.src = "Assets/Images/Cams/frames/4B-F.svg"
   } 
}

function changecam1a() {
   if (lookat == "cams") {
   if (selectedcam == "1A") {
      console.log("already there idiot")
   } else if (selectedcam != "1A") {
      clearInterval(updatecam)
      selectedcam = "1A"
      swithccam.play()
      rng1 = badrng(5,0)
      updatecam = setInterval(updatecam1A,0)
      map.src = "Assets/Images/Cams/cammap/cammap1A.svg"
   }
  }
}
function changecam1b() {
   if (lookat == "cams") {
   if (selectedcam == "1B") {
      console.log("already there idiot")
   } else if (selectedcam != "1B") {
      selectedcam = "1B"
      swithccam.play()
      clearInterval(updatecam)
      updatecam = setInterval(updatecam1B,0)
      map.src = "Assets/Images/Cams/cammap/cammap1B.svg"
   }
  }
}
function changecam1c() {
   if (lookat == "cams") {
   if (selectedcam == "1C") {
      console.log("already there idiot")
   } else if (selectedcam != "1C") {
      selectedcam = "1C"
      swithccam.play()
      clearInterval(updatecam)
      updatecam = setInterval(updatecam1C,0)
      camframe.src = "Assets/Images/Cams/frames/1C-1.svg"
      map.src = "Assets/Images/Cams/cammap/cammap1C.svg"
   }
  }
}
function changecam5() {
   if (lookat == "cams") {
   if (selectedcam == "5") {
      console.log("already there idiot")
   } else if (selectedcam != "5") {
      selectedcam = "5"
      swithccam.play()
      clearInterval(updatecam)
      updatecam = setInterval(updatecam5,0)
      rng5 = badrng(2,0)
      map.src = "Assets/Images/Cams/cammap/cammap5.svg"
   }
  }
}
function changecam7() {
   if (lookat == "cams") {
   if (selectedcam == "7") {
      console.log("already there idiot")
   } else if (selectedcam != "7") {
      selectedcam = "7"
      swithccam.play()
      clearInterval(updatecam)
      rng7 = badrng(5,0)
      updatecam = setInterval(updatecam7,0)
      camframe.src = "Assets/Images/Cams/frames/7-.svg"
      map.src = "Assets/Images/Cams/cammap/cammap7.svg"
   }
  }
}
function changecam3() {
   if (lookat == "cams") {
   if (selectedcam == "3") {
      console.log("already there idiot")
   } else if (selectedcam != "3") {
      selectedcam = "3"
      clearInterval(updatecam)
      swithccam.play()
      updatecam = setInterval(updatecam3,0)
      map.src = "Assets/Images/Cams/cammap/cammap3.svg"
   }
  }
}
var fan = document.getElementById("fan") 
var fantimes = 1
function fanspin() {
    fantimes += 1 
    fan.src = "Assets/Images/fan" + fantimes + ".png"
    if (fantimes >= 3) {
      fantimes = 1
    }
}
function changecam2a() {
   if (lookat == "cams") {
   if (selectedcam == "2A") {
      console.log("already there idiot")
   } else if (selectedcam != "2A") {
      selectedcam = "2A"
      rng2A = badrng(5,0)
      swithccam.play()
      clearInterval(updatecam)
      updatecam = setInterval(updatecam2A,0)
      camframe.src = "Assets/Images/Cams/frames/2A-.svg"
      map.src = "Assets/Images/Cams/cammap/cammap2a.svg"
   }
  }
}
function changecam2b() {
   if (lookat == "cams") {
   if (selectedcam == "2B") {
      console.log("already there idiot")
   } else if (selectedcam != "2B") {
      selectedcam = "2B"
      swithccam.play()
      clearInterval(updatecam)
      updatecam = setInterval(updatecam2B,0)
      camframe.src = "Assets/Images/Cams/frames/2B-.svg"
      map.src = "Assets/Images/Cams/cammap/cammap2b.svg"
   }
  }
}
function changecam4a() {
   if (lookat == "cams") {
   if (selectedcam == "4A") {
      console.log("already there idiot")
   } else if (selectedcam != "4A") {
      selectedcam = "4A"
      swithccam.play()
      rng4A = badrng(20,0)
      clearInterval(updatecam)
      updatecam = setInterval(updatecam4A,0)
      map.src = "Assets/Images/Cams/cammap/cammap4a.svg"
   }
  }
}
function changecam4b() {
   if (lookat == "cams") {
   if (selectedcam == "4B") {
      console.log("already there idiot")
   } else if (selectedcam != "4B") {
      selectedcam = "4B"
      swithccam.play()
      rng4B = badrng(20,0)
      clearInterval(updatecam)
      updatecam = setInterval(updatecam4B,0)
      map.src = "Assets/Images/Cams/cammap/cammap4b.svg"
   }
  }
}
function waitcams() {
   canusecams = true
}
var buttonstate = "off"
function shutthedoor() {
   console.log(doorbutton1.src)
   if (lookat == "door1"||lookat == "door2") {
      if (buttonstate == "off") {
         doorbutton1.src = "Assets/Images/Door1on.jpg"
         buttonstate = "on"
         
      } else if (buttonstate == "on") {
         doorbutton1.src = "Assets/Images/Door1off.jpg"
         buttonstate = "off"
      }
   }
}
var bonniedeathtime;
var deathtimer = 5000
var deathtimerfunc;
var deathtimerfunc2;
function experimentalbonmove() {
   var waittomove = (badrng(60,50) / bonnielvl) * 1000
   setTimeout(movebonnie,waittomove)
}

function experimentalbonmove() {
   clearTimeout(deathtimerfunc)
   var waittomove = (badrng(60,50) / bonnielvl) * 1000
   setTimeout(movebonnie,waittomove)
}

function experimentalchicamove() {
   if (lookat != "winscreen") {
   var waittomove = (badrng(60,50) / chicalvl) * 1000
      setTimeout(movechica,waittomove)
   }
}
var bonnie;
var clearbon;
var clearchica;
function movebonnie() {
   var bonmove;
   if (bonniepos != "door") {
  clearbon = setTimeout(experimentalbonmove,badrng(2000,1000))
   if (bonniepos == "1A") {
      bonniepos = "1B"
      console.log("oh no bonnie is off the stage")
   } else if (bonniepos == "1B") {
      bonmove = badrng(5,1)
      console.log(bonmove)
      if (bonmove == 1||bonmove == 2) {
         bonniepos = "2A"
      } else if (bonmove == 3||bonmove == 4) {
         bonniepos = "3"
      } else if (bonmove == 5) {
         bonniepos = "5"
      }
   } else if (bonniepos == "5") {
      bonmove = badrng (4,1) 
      if (bonmove == 1||bonmove == 2) {
         bonniepos = "1B"
      } else if (bonniepos == 3||bonniepos == 4) {
         bonniepos = "2A"
      }
   } else if (bonniepos == "2A") {
      bonmove = badrng(20,1) 
         if (bonmove != 19&& bonmove > 5) {
            bonniepos = "2B"
         } else if (bonmove == 19) {
            bonniepos = "door"
         } else if (bonmove < 6) {
            bonniepos = "3"
         }
      } else if (bonniepos == "3") {
         bonmove = badrng(7,1)
         if (bonmove >= 5) {
            bonniepos = "2B"
         } else if (bonmove <= 2) {
            bonniepos = "2A"
         } else {
            bonniepos = "1B"
         }
      } else if (bonniepos == "2B") {
         bonmove = badrng(9,1)
         if (bonmove >= 5) {
            bonniepos = "door"
         } else if (bonmove <= 2) {
            bonniepos = "2A"
         } else {
            bonniepos = "3"
         }
      }
      console.log(bonniepos)
   }  else if (bonniepos == "door") {
      bonniedeathtime = setInterval(checkdoorclose,0)
   setTimeout(experimentalbonmove2,badrng(12000,10000))
 }  
}
var lag = true
function checkdoorclose() {
   if (leftdoorclosed) {
      
   } else if (bonniepos == "door"&&leftdoorclosed == false&&lag) {
      console.log("hmm")
      deathtimerfunc = setTimeout(dietimebonnie,3000)
      lag = false
   }
}
var bonnietimes = 0
var jumpscare; 
function dietimebonnie() {
   // add code to animate jumpscare for now it will just restart
   lookat = "jumpscare"
   var filetype = ".svg"
   office.style = "display: block;height: 110%;width: 150%;left: -23%;top: -4%;"
   office.src = "Assets/Images/Jumpscares/bonnie_jumpscares/bo" + bonnietimes + "" + filetype
   bonnietimes += 1
   rightdoorimg.style.display = "none"
   leftdoorimg.style.display = "none"
   buttonleft.style.display = "none"
   buttonright.style.display = "none"
   camframe.style.display = "none"
   cams.style.display = "none"
   opentext.style.display = "none"
   energy.style.display = "none"
   clearInterval(updatecam)
   static.style.display = "none"
   map.style.display = "none"
   clearInterval(stupid)
   jumpscare = setInterval(dietimebonnie2,45)
}
var freddytimes = 0
function dietimefreddypd() {
   // add code to animate jumpscare for now it will just restart
   lookat = "jumpscare"
   var filetype = ".png"
   office.style = "display: block;height: 110%;width: 150%;left: -23%;top: -4%;"
   office.src = "Assets/Images/Jumpscares/Freddy_jumpscares/po" + freddytimes + "" + filetype
   freddytimes += 1
   rightdoorimg.style.display = "none"
   leftdoorimg.style.display = "none"
   buttonleft.style.display = "none"
   buttonright.style.display = "none"
   camframe.style.display = "none"
   cams.style.display = "none"
   opentext.style.display = "none"
   energy.style.display = "none"
   clearInterval(updatecam)
   static.style.display = "none"
   map.style.display = "none"
   clearInterval(stupid)
   jumpscare = setInterval(dietimepdfreddy2,45)
}
function dietimebonnie2() {
   var filetype = ".svg"
   office.src = "Assets/Images/Jumpscares/bonnie_jumpscares/bo" + bonnietimes + "" + filetype
   bonnietimes += 1
   if (bonnietimes > 22) {
      clearInterval(jumpscare) 
      restart()
      bonnietimes = 0
   }
}
function dietimepdfreddy2() {
   var filetype = ".png"
   office.src = "Assets/Images/Jumpscares/Freddy_Jumpscares/powerout_f/po" + freddytimes + "" + filetype
   freddytimes += 1
   if (freddytimes > 20) {
      clearInterval(jumpscare) 
      restart()
      freddytimes = 0
   }
}
function restart() {
   //add code to not just reset the window, feeling too lazy right now
   location.reload() 
}
function experimentalbonmove2() {
   movebonnie()
   bonniepos = "1B"
}
var chica;
var chicadeathtime;
function movechica() {
   var chicamove;
   if (chicapos != "door") {
  clearchica = setTimeout(experimentalchicamove,badrng(2000,1000))
   if (chicapos == "1A") {
      chicapos = "1B"
      console.log("oh no chica is off the stage")
   } else if (chicapos == "1B") {
      chicamove = badrng(5,1)
      console.log(chicamove)
      if (chicamove == 1||chicamove == 2) {
         chicapos = "4A"
      } else if (chicamove == 3||chicamove == 4) {
         chicapos = "7"
      } else if (chicamove == 5) {
         chicapos = "6"
      }
   } else if (chicapos == "7") {
      chicamove = badrng (4,1) 
      if (chicamove == 1||chicamove == 2) {
         chicapos = "6"
      } else if (chicapos == 3||chicapos == 4) {
         chicapos = "4A"
      }
   } else if (chicapos == "4A") {
      chicamove = badrng(20,1) 
         if (chicamove != 19&& chicamove > 5) {
            chicapos = "4B"
         } else if (chicamove == 19) {
            chicapos = "door"
         } else if (chicamove < 6) {
            chicapos = "6"
         }
      } else if (chicapos == "6") {
         chicamove = badrng(6,0)
         if (chicamove >= 5) {
            chicapos = "7"
         } else if (chicamove <= 2) {
            chicapos = "4A"
         } else {
            chicapos = "4B"
         }
      } else if (chicapos == "4B") {
         chicamove = badrng(9,1)
         if (chicamove >= 5) {
            chicapos = "door"
         } else if (chicamove <= 2) {
            chicapos = "4A"
         } else {
            chicapos = "6"
         }
      }
      console.log(chicapos)
   }  else if (chicapos == "door") {
   chicadeathtime = setInterval(checkrightdoorclose,0)
      setTimeout(experimentalchicamove2,badrng(12000,10000))
 }  
}
function experimentalchicamove2() {
   movechica()
   chicapos = "1B"
}
var lag2 = true
function checkrightdoorclose() {
   if (rightdoorclose) {
      
   } else if (chicapos == "door"&&rightdoorclose == false&&lag2) {
      console.log("hmm")
      deathtimerfunc2 = setTimeout(dietimechica,3000)
      lag2 = false
   }
}
function dietimechica() {
   location.reload
}