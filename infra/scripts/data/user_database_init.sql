CREATE SCHEMA API;

SET search_path to API;

DROP TABLE IF EXISTS API.User;
DROP TABLE IF EXISTS API.Document;

CREATE TABLE User {
  userID INT NOT NULL,
  username VARCHAR(255),
  userPassword VARCHAR(255),
  email VARCHAR(255),
  PRIMARY KEY(userID)
};

CREATE TABLE Document {
  documentID INT NOT NULL,
  documentFilename VARCHAR(255),
  creationTimestamp TIMESTAMP NOT NULL NOW(),
  modificationTimestamp TIMESTAMP NOT NULL NOW(),
  authoringOwner User,
  FOREIGN KEY(authoringOwner) REFERENCES User(userID),
  PRIMARY KEY(documentID)
};

CREATE ROLE Member NO LOGIN;
CREATE ROLE Sentinel WITH NOINHERIT LOGIN PASSWORD 'root';
 
GRANT Member TO Sentinel;
GRANT USAGE ON SCHEMA API to Member;
GRANT ALL ON API.User to Member;
GRANT ALL ON API.Document to Member;
GRANT ALL PRIVILEGES ON ALL SEQUENCES OM SCHEMA API TO Member;