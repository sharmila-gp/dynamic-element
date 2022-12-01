
var biscuit1 = {productName:"Mariegold", productId:"1001",price:100,quantity:"<input type='number' value='1' class= box1>"};
var biscuit2 = {productName:"JimJam", productId:"1002",price:102,quantity:"<input type='number' value='1' class= box2>"};
var biscuit3 = {productName:"Hide&Seek", productId:"1003",price:150,quantity:"<input type='number' value='1' class= box3>"};
var biscuit4 = {productName:"Bourborn", productId:"1004",price:160,quantity:"<input type='number' value='1' class= box4>"};


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
	var table = document.getElementById("mytable");
	var item=table.getElementsByClassName(cname)[0].value;
	var node5 = item * objectname.price;
	console.log(item);
	td5.innerHTML = node5;
	document.getElementById(idname).appendChild(td5);
	}
	

function textbox(){
	let box;
	var z;
	for(i=1;i<=4;i++){
	box='box'+i;
	z="<input type='number' value='1' class= box>";
	}
	
	return "<input type='number' value='1' class= box>";
}

