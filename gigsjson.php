<?php
$jsondata = file_get_contents("php://input");
echo $jsondata;
$writeJson = file_put_contents('data.json', $jsondata);
?>
