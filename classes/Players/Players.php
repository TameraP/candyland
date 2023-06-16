<?php
include("./connect/DatabaseClass.php"); 
class Players extends DatabaseClass {
    protected $playerInfo = [];
    protected $playerFacts = [];
    protected $playerStatus = false;
    protected $playerAgreement = false;
    private $dbClass;
    protected $var1;

    function __construct($dbClass, $playerInfo = []) {
      $this->dbClass = DatabaseClass::getInstance();
      $this->playerInfo = $playerInfo['newVal'];
    }

    function GetPlayerInfo($playerInfo) {
       $this->playerFacts = $this->playerInfo[0];
       return $this->playerFacts;
    }

    function GetPlayerStatus($playerInfo, $playerFacts) {
        $this->playerStatus = ($this->playerInfo[1] == 'newUser') ? true : false;
       return ($this->playerStatus) ? $this->InsertPlayerFacts($this->playerFacts) : $this->FetchPlayerFacts($this->playerFacts);
    }

    function InsertPlayerFacts($playerFacts) {
        $info = $this->playerFacts;
        $firstName = $info['firstName'];
        $lastName = $info['lastName'];
        $email = $info['email'];
        $userName = $info['userName'];
        $pwd = $info['password'];
        $agree = $info['userAgreement'];
        $sql = "INSERT INTO candyland_db (FirstName, LastName, Email, UserName, UserPassword, UserAgree, LVL) VALUES ($firstName, $lastName, $email, $userName, $pwd, $agree, 0)";
        $this->var1 =$this->dbClass->exec($sql);
     
        return $this->FetchPlayerFacts($this->var1);
    }

    function FetchPlayerFacts($var1) {
        $this->var2 = $var1;
        return $this->var2;
    }
}

?>