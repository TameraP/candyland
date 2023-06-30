CREATE TABLE Users (
  ID int NOT NULL AUTO_INCREMENT,
  FirstName varchar(225) NOT NULL,
  LastName varchar(225) NOT NULL,
  Email varchar(400) NOT NULL,
  UserName varchar(225) NOT NULL,
  UserPassword varchar(225) NOT NULL,
  UserAgree boolean default 0,
  LVL int (50),
  UserPhoto varchar(400) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Users (FirstName, LastName, Email, UserName, UserPassword, UserAgree, LVL, UserPhoto) VALUES ('Tamera', 'Peake', '1234@gmail.com', 'Tamerap', 'password1', TRUE, 0, './assets/img/userPhotos/photocomingsoon.jpg');