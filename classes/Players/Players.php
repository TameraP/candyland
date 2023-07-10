<?php
include("./connect/DatabaseClass.php"); 
class Players extends DatabaseClass {
    protected $playerInfo = [];
    protected $playerFacts = [];
    protected $loggedInPlayerBasic = [];
    protected $loggedInPlayerAdvanced = [];
    protected $playerStatus = false;
    protected $playerAgreement = false;
    private $dbClass;
    private $dbConn;
    protected $var1;
    protected $returnFetch = [];

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
        $pwd = password_hash($info['password'], PASSWORD_DEFAULT);
        $agree = $info['userAgreement'];
        $userPhoto = './assets/img/userPhotos/photocomingsoon.jpg';
        $LVL = 0;
        try {
            $stmt = $this->dbConn->prepare("INSERT INTO Users (FirstName, LastName, Email, UserName, UserPassword, UserAgree, LVL, UserPhoto) VALUES (:firstName, :lastName, :email, :userName, :pwd, :agree, :LVL, :userPhoto)");
            $stmt->bindParam(':firstName', $firstName);
            $stmt->bindParam(':lastName', $lastName);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':userName', $userName);
            $stmt->bindParam(':pwd', $pwd);
            $stmt->bindParam(':agree', $agree);
            $stmt->bindParam(':LVL', $LVL);
            $stmt->bindParam(':userPhoto', $userPhoto);
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
        if($user) {
            if(password_verify($info['password'], $user['UserPassword'])) {
                array_push($this->loggedInPlayerBasic, $user['ID'], $user['UserName'], $user['LVL'], $user['UserPhoto']);
                $this->var1 = $this->loggedInPlayerBasic;
                $fetchStatus = true;
                $this->returnFetch = array($this->var1, $fetchStatus);

            }
            else {
                $this->var1 = "Sorry. It seems that ".$info['password']." is not the correct password. Please try again.";
                $fetchStatus = false;
                $this->returnFetch = array($this->var1, $fetchStatus);
            }
        }
        else {
            $this->var1 = "Sorry. It doesn't look like we have ".$userNameInfo." in our database. Please try again.";
            $fetchStatus = false;
            $this->returnFetch = array($this->var1, $fetchStatus);
        }

        return $this->returnFetch;
    }
}

?>