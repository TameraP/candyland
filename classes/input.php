<?php
$json = file_get_contents('php://input');
$data = json_decode($json);

$returnData = json_encode($data);
echo $returnData;
exit();
?>