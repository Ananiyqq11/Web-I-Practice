//linked to custom.html page
function AddToList(){
    var  TextValue = document.getElementById('TextValue').value,
     ListNode = document.getElementById('List'),
     LiNode = document.createElement("LI"),
     TextNode = document.createTextNode(TextValue);
    
    ListNode.appendChild(LiNode);
    LiNode.appendChild(TextNode);
}