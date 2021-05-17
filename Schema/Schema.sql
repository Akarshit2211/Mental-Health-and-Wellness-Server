USE mentalhealthsocialdb;

CREATE TABLE users(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    dob DATE NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email_id VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT NOW()
);

CREATE TABLE posts(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    post_text VARCHAR(255),
    image_url VARCHAR(255),
    created_at DATETIME DEFAULT NOW(),
    FOREIGN KEY (id) REFERENCES users(id)
);

CREATE TABLE comments(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    comment_txt VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE likes(
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY (post_id, user_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE follows(
    follower_id INTEGER NOT NULL,
    followee_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY (follower_id, followee_id),
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followee_id) REFERENCES users(id)
);