var x = document.getElementById("num1").value;
var y = document.getElementById("num2").value;

function sum(x, y)
	{
		res(x+y);
	}

function diff(x, y)
	{
		res(x-y);
	}

function prod(x, y)
	{
		res(x*y);
	}

function quot(x, y)
	{
		res(x/y);
	}

function rem(x, y)
	{
		res(x%y);
	}

function res(a)
	{
		document.getElementById('res').innerHTML = a;
	}
