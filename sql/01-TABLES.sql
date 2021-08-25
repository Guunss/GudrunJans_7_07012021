use groupomania;

DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id          INT             NOT NULL AUTO_INCREMENT,
    email       VARCHAR(50)     NOT NULL,
    password    VARCHAR(150)    NOT NULL,
    moderator   BOOLEAN         NOT NULL DEFAULT false,
    pseudo      VARCHAR(50)     NOT NULL,
    image       VARCHAR(255),
    createdAt    DATETIME,
    updatedAt    DATETIME,
    PRIMARY KEY (id)
) ENGINE = InnoDB;


CREATE TABLE posts (
    id          INT             NOT NULL AUTO_INCREMENT,
    titre       VARCHAR(50)     NOT NULL,
    image       VARCHAR(255)    NOT NULL,
    userId      INT             NOT NULL,
    createdAt   DATETIME,
    updatedAt   DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
) ENGINE = InnoDB;

CREATE TABLE comments (
    id          INT             NOT NULL AUTO_INCREMENT,
    comment     TEXT            NOT NULL,
    userId      INT             NOT NULL,
    postId      INT             NOT NULL,
    createdAt   DATETIME,
    updatedAt   DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (postId) REFERENCES posts(id)
) ENGINE = InnoDB;
