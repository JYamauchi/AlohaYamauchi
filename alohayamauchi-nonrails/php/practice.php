<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" name="viewport" content="width=370, initial-scale=1.0, maximum-scale=1">
	<link rel="stylesheet" type="text/css" href="../css/practice.css">

</head>
<body>
	<?php
		//Make a list of all names
		$list = array();
		array_push($list, "jared", "arisa", "nicolas", "casey", "jiyoung");
		$winNum = rand(0, 4);

		$winner = ucfirst($list[$winNum]);

		//Paper, Rock, Scissor game
		function RPSgame(){
			$paper = "paper";
			$scissor = "scissor";
			$rock = "rock";
			$element = array($paper, $scissor, $rock);

			if ($element[0] > $element[1]){
				$result =
			}
			elseif ($element[1] > $element[2]) {
				$result =
			}
			elseif ($element[2] > $element[0]) {
				$result =
			};

			$sign = array_rand($element);
		};

		RPSgame();
	?>

	<div class="game-div">
	The winner is <b><?= $winner ?></b>.
	</div>
</body>
</html>
