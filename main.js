
var biscuit1 = {productName:"Mariegold", productId:"1001",price:100,quantity:"<input type='number' value='3' id= 'box1'>"};
var biscuit2 = {productName:"JimJam", productId:"1002",price:102,quantity:"<input type='number' value='3' id= 'box2'>"};
var biscuit3 = {productName:"Hide&Seek", productId:"1003",price:150,quantity:"<input type='number' value='1' id= 'box3'>"};
var biscuit4 = {productName:"Bourborn", productId:"1004",price:160,quantity:"<input type='number' value='1' id= 'box4'>"};
var i=0;
var z=0;
tableData();

function tableData()
{
var x = document.createElement("TABLE");
x.setAttribute("id","mytable");
document.body.appendChild(x);
tableThead();

var tr1 = document.createElement("TR");
tr1.setAttribute("id","mytr1");
document.getElementById("mytable").appendChild(tr1);
tableBody(biscuit1,"mytr1", "box1");

var tr2 = document.createElement("TR");
tr2.setAttribute("id","mytr2");
document.getElementById("mytable").appendChild(tr2);
tableBody(biscuit2,"mytr2", "box2");

var tr3 = document.createElement("TR");
tr3.setAttribute("id","mytr3");
document.getElementById("mytable").appendChild(tr3);
tableBody(biscuit3,"mytr3", "box3");

var tr4 = document.createElement("TR");
tr4.setAttribute("id","mytr4");
document.getElementById("mytable").appendChild(tr4);
tableBody(biscuit4,"mytr4","box4");
}


function tableThead(){
	var x1 = document.createElement("TR");
	x1.setAttribute("id","myth");
	document.getElementById("mytable").appendChild(x1);
	
	var x2=document.createElement("TD");
	var node = document.createTextNode("ProductName");
	x2.appendChild(node);
	document.getElementById("myth").appendChild(x2);
	
	
	var x3=document.createElement("TD");
	var node1 = document.createTextNode("ProductId");
	x3.appendChild(node1);
	document.getElementById("myth").appendChild(x3);
	
	var x4=document.createElement("TD");
	var node2 = document.createTextNode("Price");
	x4.appendChild(node2);
	document.getElementById("myth").appendChild(x4);
	
	var x5 = document.createElement("TD");
	var node3 = document.createTextNode("Quantity");
	x5.appendChild(node3);
	document.getElementById("myth").appendChild(x5);
	
	var x6 = document.createElement("TD");
	var node4 = document.createTextNode("NetPrice");
	x6.appendChild(node4);
	document.getElementById("myth").appendChild(x6);
}


function tableBody(objectname, idname, cname){
	
	var td1=document.createElement("TD");
	td1.innerHTML=objectname.productName;
	document.getElementById(idname).appendChild(td1);
	
	var td2=document.createElement("TD");
	td2.innerHTML=objectname.productId
	document.getElementById(idname).appendChild(td2);
	
	var td3=document.createElement("TD");
	var node3 = document.createTextNode(objectname.price);
	td3.innerHTML= objectname.price;
	document.getElementById(idname).appendChild(td3);
	
	var td4=document.createElement("TD");
	var ch=objectname.quantity;
	td4.innerHTML= ch;
	document.getElementById(idname).appendChild(td4);
	
	var td5=document.createElement("TD");
	i++;
	td5.setAttribute("id","mytd"+i);
	document.getElementById(idname).appendChild(td5);
	var item=document.getElementById(cname);
	var node5 = item.value * objectname.price;
	td5.innerHTML = node5;
	}
	
var item1=document.getElementById("box1");
var item2=document.getElementById("box2");
var item3=document.getElementById("box3");
var item4=document.getElementById("box4");
var tdel1=document.getElementById("mytd1");
var tdel2=document.getElementById("mytd2");
var tdel3=document.getElementById("mytd3");
var tdel4=document.getElementById("mytd4");




item1.addEventListener('input',multiply(item1.value,biscuit1,tdel1));
item2.addEventListener('input',multiply(item2.value,biscuit2,tdel2));
item3.addEventListener('input',multiply(item3.value,biscuit3,tdel3));
item4.addEventListener('input',multiply(item4.value,biscuit4,tdel4));


function multiply(val, obj, idna){
let mul;
mul=val*obj.price;
idna.innerHTML=mul;
console.log(mul);
}

	
function textbox(){
	z++;
	return "<input type='number' value='1' id='box'+z>";
}

