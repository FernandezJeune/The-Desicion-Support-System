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
            document.getElementById("VegtableInfoID").innerHTML="<h1>Cabbage is a leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is descended from the wild cabbage, and belongs to the cole crops or brassicas, meaning it is closely related to broccoli and cauliflower; Brussels sprouts; and Savoy cabbage.</h1>";
        }
        if(index == 1  ){
            document.getElementById("VegtableInfoID").innerHTML="<h1>Chinese cabbage can refer to two cultivar groups of leaf vegetables often used in Chinese cuisine: the Pekinensis Group and the Chinensis Group. These vegetables are both variant cultivars or subspecies of the turnip and belong to the same genus as such Western staples as cabbage, broccoli, and cauliflower.</h1>";
        }
        if(index == 2  ){
            document.getElementById("VegtableInfoID").innerHTML="<h1>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</h1>";
        }
        if(index == 3  ){
            document.getElementById("VegtableInfoID").innerHTML="<h1>Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae family. It is an annual plant that reproduces by seed. Typically, only the head is eaten – the edible white flesh sometimes called curd. </h1>";
        }
        if(index == 4  ){
            document.getElementById("VegtableInfoID").innerHTML="<h1>Snap Beans (green or wax) are a member of the Leguminosae (legume family). The species Phaseolus vulgaris are also dried beans which are harvested for baking beans. Bean flowers are self pollinated. Snap bean cultivars differ from dry bean cultivars by having thicker walled pods.</h1>";
        }
        if(index == 5  ){
            document.getElementById("VegtableInfoID").innerHTML="<h1>The pea is most commonly the small spherical seed or the seed-pod of the pod fruit Pisum sativum. Each pod contains several peas, which can be green or yellow. Botanically, pea pods are fruit, since they contain seeds and develop from the ovary of a flower.</h1>";
        }
        if(index == 6  ){
            document.getElementById("VegtableInfoID").innerHTML="<h1>The bell pepper is the fruit of plants in the Grossum cultivar group of the species Capsicum annuum. Cultivars of the plant produce fruits in different colors, including red, yellow, orange, green, white, and purple. Bell peppers are sometimes grouped with less pungent pepper varieties as sweet peppers.</h1>";
        }
        if(index == 7  ){
            document.getElementById("VegtableInfoID").innerHTML="<h1>White potatoes hold their shape well after cooking. Their delicate, thin skins add just the right amount of texture to a velvety mashed potato dish without the need for peeling. Grilling whites brings out a more full-bodied flavor.</h1>";
        }
        if(index == 8  ){
            document.getElementById("VegtableInfoID").innerHTML="<h1>The carrot is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds.</h1>";
        }
        if(index == 9  ){
            document.getElementById("VegtableInfoID").innerHTML="<h1>Tomato info . . . . </h1>";
        }
    };
}