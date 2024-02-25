const Inputbox=document.getElementById("input-box");  //It is where you type the task
//getElementById is a method in JavaScript that allows you to find an HTML element on a webpage by its unique identifier, known as the "id" attribute.
//Return Value:
//If it finds an element with the given ID, it returns that element.
//If no element with the specified ID exists, it returns null.
const ListContainer=document.getElementById("list-Container"); //It is area where your task are listed
function addTask()
{
    if(Inputbox.value === '')              //It checks whether your Inputbox is not empty
    {
        alert("You must write something");       
    }
    else{                                      //If Inputbox is not empty then
        let li=document.createElement("li");  //If not empty, creates a new task (<li>) with the text from the input box, adds a close button (<span> with an 'X'), and appends it to the task list.
        //The document.createElement() method is a function in JavaScript that allows you to dynamically create HTML elements within your web page.
        //Return Value:
          //This method returns a new HTML element of the specified type.
        li.innerHTML=Inputbox.value;  
        //innerHTML is a property in JavaScript that allows you to access or modify the HTML content within an element. It represents the markup contained within the element, including any child elements, text, or other HTML tags.                 
       // You can also set the HTML content of an element by assigning a string to its innerHTML property.
       //This will replace any existing content within the element with the new HTML markup you provide.
        ListContainer.appendChild(li);
       // appendChild() is a method in JavaScript used to add a new child node to a parent node. It appends a node as the last child of a specified parent node.
       //Return Value:
    //The appendChild() method doesn't return anything. It directly modifies the DOM structure by adding the specified node as a child of the parent node.
       let span=document.createElement("span");//In HTML, a <span> element is an inline container used to group and style inline elements or text within a larger block of content. It doesn't add any visual formatting or line breaks by default; instead, it's often used to apply styles or behaviors to a specific section of text or inline elements.
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    Inputbox.value="";
    saveData();
}
ListContainer.addEventListener("click",function(e){
if(e.target.tagName==="LI")
{
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName==="SPAN")
{
    e.target.parentElement.remove();
    saveData();
}
},false);

function saveData()
{
    localStorage.setItem("data",ListContainer.innerHTML);
}
