class Pizza 
{
    constructor(size, toppings, crust, sauce)
    {
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        this.sauce = sauce;
    }
    descr() 
    {
        return `You ordered a ${this.crust} ${this.size} pizza with ${this.toppings.join(", ")} toppings on a ${this.sauce} base sauce.`;
    }
}

var stdInfo = document.getElementById("stdInfo");
var studentName = "Vraj Patel";
var studentID = "200554104";
stdname.textContent = "Name: " + studentName;
stdid.textContent ="Student ID: " +studentID;
    
var btnClicked=document.getElementById("btn");

btnClicked.addEventListener("click", function() 
{
    event.preventDefault();
    var pizzaSize = document.getElementById("size").value;
    if (!pizzaSize)
    {
        alert("Please select a pizza size.");
        return;
    }    
    
    var crustBoxChecked = document.getElementsByName("crust");
    var crustType;
    for (var i = 0; i < crustBoxChecked.length; i++) 
    {
        if (crustBoxChecked[i].checked) 
        {
            crustType = crustBoxChecked[i].value;
            break;
        }
    }
    if (!crustType) 
    {
        alert("Please select any one crust type.");
        return;
    }

    var sauceBoxChecked = document.getElementsByName("basesauce");
    var sauce;
    for (var i = 0; i < sauceBoxChecked.length; i++) 
    {
        if (sauceBoxChecked[i].checked) 
        {
            sauce = sauceBoxChecked[i].value;
            break;
        }
    }
    if (!sauce) 
    {
        alert("Please select any  one of the base sauces.");
        return;
    }

    var values=[];
    var checkbox = document.querySelectorAll('input[name="topping"]:checked');
    if (checkbox.length === 0) 
    {
        alert("Please select at least one topping.");
        return;
    }
    checkbox.forEach(function(cb)
    {
        values.push(cb.value);
    });
    let vrajPizza = new Pizza(pizzaSize, values, crustType, sauce);
    var description = document.getElementById("description");
    description.textContent = vrajPizza.descr();
});