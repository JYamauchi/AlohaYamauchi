<?php
	$filename="http://www.alohayamauchi.com/download/JYamauchi-Resume-2016.pdf";
	// We'll be outputting a PDF
	header('Content-type: application/pdf');
	// It will be called downloaded.pdf
	header('Content-Disposition: attachment; filename="Jared-Yamauchi-Resume.pdf"');
	// The PDF source is in original.pdf
	readfile($filename);
?>