<?php

	$uri = $_SERVER['REQUEST_URI'];
	$uri_parts = explode("/", $uri);
	$folder = array_pop($uri_parts);

	if ($folder == 'index.php')
	{
		$template = 'body.php';
	}
	else
	{
		$template = $folder.'/demo.php';
	}
?>
<!DOCTYPE html>

<html>

<?php require_once('head.php'); ?>

<body>

<?php
	require_once('navigation.php');
?>

<div class="container-fluid">
	<div class="main row-fluid" style="margin-top:50px;">

<?php
	require_once($template);
	require_once('footer.php');
?>

	</div>

</div>

</body>
</html>