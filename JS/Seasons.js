var items = document.querySelectorAll("#MonthsList li"),
     tab = [], sindex;

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
            document.getElementById("MonthsInfoID").innerHTML="<h1>JANUAAAAAAAAAAAAARRRRRRRRRRRRRRRYYYYYYYYYYYYYY.</h1>";
        }
        if(index == 1  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>FEBBBBBBBBBBB RUAAAAAAAAAAAAAAAARRYYYY </h1>";
        }
        if(index == 2  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Carrot info . . . . </h1>";
        }
        if(index == 3  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Chinese Cabbage info . . . . </h1>";
        }
        if(index == 4  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Sweat Peas info . . . . </h1>";
        }
        if(index == 5  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Lettuce info . . . . </h1>";
        }
        if(index == 6  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Bell Pepper info . . . . </h1>";
        }
        if(index == 7  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Broccoli info . . . . </h1>";
        }
        if(index == 8  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Cauli Flower info . . . . </h1>";
        }
        if(index == 9  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Tomato info . . . . </h1>";
        }
        if(index == 10  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Tomato info . . . . </h1>";
        }
        if(index == 11  ){
            document.getElementById("MonthsInfoID").innerHTML="<h1>Tomato info . . . . </h1>";
        }
    };
}
