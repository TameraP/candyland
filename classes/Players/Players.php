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
     
        if($this->var1) {
            return $this->FetchPlayerFacts($this->playerFacts);
        }
    }


    function FetchPlayerFacts($playerFacts) {
        $this->dbConn = $this->GetDB();
        $info = $this->playerFacts;
        $userNameInfo = $info['userName'];

        $stmt = $this->dbConn->prepare("SELECT * FROM Users WHERE UserName= ? ");
        $stmt->execute([$userNameInfo]);
        $user = $stmt->fetch();

        // if($user && password_verify($info['password'], $user['UserPassword'])) {
         if($user && password_verify("password", $user['UserPassword'])) {
            $this->var1 = $user;
        }
        else {
            // $this->var1 = "It doesn't look like we have you in our system.<br>". $user['UserPassword']. "<br>".$info['password'];
            $this->var1 = password_verify($info['password'], $user['UserPassword'])."<br>".$info['password']."<br>".$user['UserPassword'];
        }

        return $this->var1;
    }
}

?>