var items = document.querySelectorAll("#VegsList li"),
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
            document.getElementsByClassName("VegtableInfo").innerHTML="<h1>Cabbage is a leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is descended from the wild cabbage, and belongs to the cole crops or brassicas, meaning it is closely related to broccoli and cauliflower; Brussels sprouts; and Savoy cabbage.</h1>";
        }
        if(index == 1  ){
            document.getElementById("VegtableInfo").innerHTML="<h1>Potato info . . . . </h1>";
        }
        if(index == 2  ){
            document.getElementById("VegtableInfo").innerHTML="<h1>Carrot info . . . . </h1>";
        }
        if(index == 3  ){
            document.getElementById("VegtableInfo").innerHTML="<h1>Chinese Cabbage info . . . . </h1>";
        }
        if(index == 4  ){
            document.getElementById("VegtableInfo").innerHTML="<h1>Sweat Peas info . . . . </h1>";
        }
        if(index == 5  ){
            document.getElementById("VegtableInfo").innerHTML="<h1>Lettuce info . . . . </h1>";
        }
        if(index == 6  ){
            document.getElementById("VegtableInfo").innerHTML="<h1>Bell Pepper info . . . . </h1>";
        }
        if(index == 7  ){
            document.getElementById("VegtableInfo").innerHTML="<h1>Broccoli info . . . . </h1>";
        }
        if(index == 8  ){
            document.getElementById("VegtableInfo").innerHTML="<h1>Cauli Flower info . . . . </h1>";
        }
        if(index == 9  ){
            document.getElementById("VegtableInfo").innerHTML="<h1>Tomato info . . . . </h1>";
        }
    };
}
