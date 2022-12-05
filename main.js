

var biscuit1 = {productName:"Mariegold", productId:"1001",price:100,quantity:"<input type='number'value='1' id= 'box1' oninput = multiply('box1',biscuit1,'mytd1',total)>"};
var biscuit2 = {productName:"JimJam", productId:"1002",price:102,quantity:"<input type='number' value='1'id= 'box2'oninput = multiply('box2',biscuit2,'mytd2',total)>"};
var biscuit3 = {productName:"Hide&Seek", productId:"1003",price:150,quantity:"<input type='number'value='1' id= 'box3'oninput = multiply('box3',biscuit3,'mytd3',total)>"};
var biscuit4 = {productName:"Bourborn", productId:"1004",price:160,quantity:"<input type='number' value='1' id= 'box4'oninput = multiply('box4',biscuit4,'mytd4',total)>"};
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

var tr5 = document.createElement("TR");
tr5.setAttribute("id","mytr5");
document.getElementById("mytable").appendChild(tr5);


var x7 = document.createElement("TD");
x7.setAttribute("colspan","4");
x7.innerHTML = "TOTAL";
document.getElementById("mytr5").appendChild(x7);

var x8 = document.createElement("TD");
x8.setAttribute("id","tot");
var to = 0;
for(var j=1;j<x.rows.length-1;j++){
var xx1 = document.getElementById("mytd"+j);
to = to +parseInt(xx1.innerHTML);
}
x8.innerHTML = to;
document.getElementById("mytr5").appendChild(x8);
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


function multiply(val, obj, idna,sum1){
let mul;
let ii = document.getElementById(val);
let tdi = document.getElementById(idna);
mul=ii.value*obj.price;
tdi.innerHTML=mul;
sum1();
}
	
function total(){
var sum = 0;
var table = document.getElementById("mytable");
for(var j=1;j<table.rows.length-1;j++){
var xx1 = document.getElementById("mytd"+j);
sum = sum +parseInt(xx1.innerHTML);
}

totalValue = document.getElementById("tot");
totalValue.innerHTML = sum;
}	


