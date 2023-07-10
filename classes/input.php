<?php
require_once './Players/Players.php';
$json = file_get_contents('php://input');
$data = json_decode($json, true); //the true converts the object into an array

// $players = new Players($data); //doesn't work with protected classes, use Object::getInstance() instead
$players = new Players($data); 
$playerInfo = $players->GetPlayerInfo($players); 
$playerStatus = $players->GetPlayerStatus($players, $playerInfo);

$returnData = json_encode($playerStatus);
echo $returnData;
exit();
?>