$(document).ready(function() {

	var scoreDiv = $('#scoreDiv');
	var array = [];
	//var result = 0;

	// function sum(firstVal, secondVal) {
	// 	var answer;
	// 	answer = firstVal ** secondVal;
	// 	return answer;
	// };

	function factorial(num) {
	  if (num < 0) 
	        return -1;
	  else if (num == 0) 
	      return 1;
	  else {
	      return (num * factorial(num - 1));
	  }
	}

	scoreDiv.html(factorial(8));

});