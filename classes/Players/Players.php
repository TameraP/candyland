<?php
include("./connect/DatabaseClass.php"); 
class Players extends DatabaseClass {
    protected $playerInfo = [];
    protected $playerFacts = [];
    protected $playerStatus = false;
    protected $playerAgreement = false;
    private $dbClass;
    private $dbConn;
    protected $var1;

    function __construct($playerInfo=[]) {
      $this->playerInfo = $playerInfo['newVal'];
    }


    function GetDB() {
        $this->dbClass = new DatabaseClass();
        return $this->dbClass->getConn();
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
        $this->dbConn = $this->GetDB();
        $info = $this->playerFacts;
        $firstName = $info['firstName'];
        $lastName = $info['lastName'];
        $email = $info['email'];
        $userName = $info['userName'];
        $pwd = $info['password'];
        $agree = $info['userAgreement'];
        $LVL = 0;
        try {
            $stmt = $this->dbConn->prepare("INSERT INTO Users (FirstName, LastName, Email, UserName, UserPassword, UserAgree, LVL) VALUES (:firstName, :lastName, :email, :userName, :pwd, :agree, :LVL)");
            $stmt->bindParam(':firstName', $firstName);
            $stmt->bindParam(':lastName', $lastName);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':userName', $userName);
            $stmt->bindParam(':pwd', $pwd);
            $stmt->bindParam(':agree', $agree);
            $stmt->bindParam(':LVL', $LVL);
            $this->var1 = $stmt->execute();
        }
        catch(PDOException $e) {
            echo $e->getMessage();
        }
     
        return $this->FetchPlayerFacts($this->var1);
    }

    function FetchPlayerFacts($var1) {
        $this->var2 = $var1;
        return $this->var2;
    }
}

?>