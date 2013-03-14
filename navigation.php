<?php
$folders = array_filter(glob('*'), 'is_dir');
?>

<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
      <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="brand" href="/index.php">Playground</a>
      <div class="nav-collapse collapse">
		    <ul class="nav">
		      <li><a href="/index.php">Home</a></li>
				  <?php foreach($folders as $folder) :?>
				  <li><a href="/index.php/<?php echo $folder; ?>"><?php echo $folder; ?></a></li>
				  <?php endforeach; ?>
		    </ul>
      </div><!--/.nav-collapse -->
    </div>
  </div>
</div>