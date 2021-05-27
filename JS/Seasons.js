var items = document.querySelectorAll("#MonthList li"),
     tab = [], index;

// add values to the array
for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
}

// get selected element index
for(var i = 0; i < items.length; i++){
    items[i].onclick = function(){

        index = tab.indexOf(this.innerHTML);
        console.log(" Index = " + index);


        if(index == 0  ){
            document.getElementById("Info").innerHTML="<h1>January info</h1>";
        }
        if(index == 1  ){
            document.getElementById("Info").innerHTML="<h1>February info . . . . </h1>";
        }
        if(index == 2  ){
            document.getElementById("Info").innerHTML="<h1>March</h1>";
        }
        if(index == 3  ){
            document.getElementById("Info").innerHTML="<h1>april</h1>";
        }
        if(index == 4  ){
            document.getElementById("Info").innerHTML="<h1>may</h1>";
        }
        if(index == 5  ){
            document.getElementById("Info").innerHTML="<h1>june</h1>";
        }
        if(index == 6  ){
            document.getElementById("Info").innerHTML="<h1>july</h1>";
        }
        if(index == 7  ){
            document.getElementById("Info").innerHTML="<h1>august</h1>";
        }
        if(index == 8  ){
            document.getElementById("Info").innerHTML="<h1>september</h1>";
        }
        if(index == 9  ){
            document.getElementById("Info").innerHTML="<h1>october</h1>";
        }
        if(index == 10  ){
            document.getElementById("Info").innerHTML="<h1>november</h1>";
        }
        if(index == 11  ){
            document.getElementById("Info").innerHTML="<h1>december</h1>";
        }
    };
}