// 4 time beginning time/
var start = new Date().getTime();

// function to apear box
function showBox() {
    
    var top = Math.floor(Math.random() * 300);
    var left = Math.floor(Math.random() * 300);
    
    document.getElementById("box").style.display = "block";
    document.getElementById("box").style.top = top +"px";
    document.getElementById("box").style.left = left +"px";
}

// set time to apear function;
setTimeout(showBox, 2000);

// 1 on clik to disapea box
document.getElementById("box").onclick = function() {
     
    // 2change display style to non
    document.getElementById("box").style.display = "none";

    // 3 measure time of disapearing
    var end = new Date().getTime();
    // take totol time 
    var reactionTime = (end - start)/100;

    //Show tiime in html
    document.getElementById("time").innerHTML = reactionTime + "s";
    
    setTimeout(showBox, 2000);

}
