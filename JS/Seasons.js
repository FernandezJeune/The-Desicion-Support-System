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
            console.log("JANUARY si selected");
            document.getElementsByClassName("YieldPattern").innerHTML="JANUARY";
        }
    };
}