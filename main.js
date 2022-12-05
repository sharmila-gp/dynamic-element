

var biscuit1 = {productName:"Mariegold", productId:"1001",price:100,quantity:"<input type='number'value='1' id= 'box1' onchange = multiply('box1',biscuit1,'mytd1')>"};
var biscuit2 = {productName:"JimJam", productId:"1002",price:102,quantity:"<input type='number' value='1'id= 'box2'onchange = multiply('box2',biscuit2,'mytd2')>"};
var biscuit3 = {productName:"Hide&Seek", productId:"1003",price:150,quantity:"<input type='number'value='1' id= 'box3'onchange = multiply('box3',biscuit3,'mytd3')>"};
var biscuit4 = {productName:"Bourborn", productId:"1004",price:160,quantity:"<input type='number' value='1' id= 'box4'onchange = multiply('box4',biscuit4,'mytd4')>"};
var i=0;
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
tableBody(biscuit1,"mytr1","box1");

var tr2 = document.createElement("TR");
tr2.setAttribute("id","mytr2");
document.getElementById("mytable").appendChild(tr2);
tableBody(biscuit2,"mytr2","box2");

var tr3 = document.createElement("TR");
tr3.setAttribute("id","mytr3");
document.getElementById("mytable").appendChild(tr3);
tableBody(biscuit3,"mytr3","box3");

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
	x2.innerHTML = "ProductName";
	document.getElementById("myth").appendChild(x2);
	
	
	var x3=document.createElement("TD");
	x3.innerHTML = "ProductId";
	document.getElementById("myth").appendChild(x3);
	
	var x4=document.createElement("TD");
	x4.innerHTML = "Price" ;
	document.getElementById("myth").appendChild(x4);
	
	var x5 = document.createElement("TD");
	x5.innerHTML = "Quantity";
	document.getElementById("myth").appendChild(x5);
	
	var x6 = document.createElement("TD");
	x6.innerHTML = "NetPrice";
	document.getElementById("myth").appendChild(x6);
}


function tableBody(objectname, idname, inputid){
	
	var td1=document.createElement("TD");
	td1.innerHTML=objectname.productName;
	document.getElementById(idname).appendChild(td1);
	
	var td2=document.createElement("TD");
	td2.innerHTML=objectname.productId
	document.getElementById(idname).appendChild(td2);
	
	var td3=document.createElement("TD");
	td3.innerHTML= objectname.price;
	document.getElementById(idname).appendChild(td3);
	
	var td4=document.createElement("TD");
	var ch=objectname.quantity;
	td4.innerHTML= ch;
	document.getElementById(idname).appendChild(td4);
	
	var td5=document.createElement("TD");
	i++;
	td5.setAttribute("id","mytd"+i);
	var inputele = document.getElementById(inputid).value;
	td5.innerHTML = inputele * objectname.price;
	document.getElementById(idname).appendChild(td5);
	}


function multiply(val, obj, idna){
let mul;
let ii = document.getElementById(val);
let tdi = document.getElementById(idna);
mul=ii.value*obj.price;
tdi.innerHTML=mul;
}
	


