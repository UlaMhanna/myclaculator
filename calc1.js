
 

 // var sum = parseInt(num1) + parseInt(num2);
 // var sub = parseInt(num1) - parseInt(num2);
 // var mult = parseInt(num1) * parseInt(num2);
 // var div= parseInt(num1) / parseInt(num2);
 // var mod = parseInt(num1) % parseInt(num2);
 //var equal=$('#equal').onClick(getResult2)

function getResult2(oper){
var result;
var num1 = $('#fNum').val();
var num2 = $('#sNum').val();
	if(oper === 'sum'){
		 result = parseFloat(num1) + parseFloat(num2) ;
	}
	else if(oper === 'sub'){
		 result = parseFloat(num1) - parseFloat(num2) ;
	}
	else if(oper === 'mult'){
		 result =parseFloat(num1) * parseFloat(num2) ;
	}
	else if(oper === 'div'){
		 result = parseFloat(num1) / parseFloat(num2);
	}
	else if(oper === 'mod'){
		 result = parseFloat(num1) % parseFloat(num2);
	}
	else if(oper === 'pow'){
		 result = Math.pow(parseFloat(num1), parseFloat(num2));
	}
	else if(oper === 'expo'){
		 result = Math.pow(parseFloat(num1), parseFloat(num2));
	}
	else{
		 result = Math.pow(num1,num2);
	}
	//console.log(result);
	$("#output").val(result)
	return result;
}


$("#clear").click(function(){
	$('#fNum').val('') 
	$('#sNum').val('')
	$('#output').val('')
});
