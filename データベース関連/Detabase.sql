create Table human(
    human_id CHAR(3) NOT NULL,
    human_name VARCHAR(255) NOT NULL,
    human_meigen VARCHAR(255) NOT NULL,
    PRIMARY KEY (human_id)
);

CREATE TABLE anime(
    anime_id CHAR(3) NOT NULL ,
    anime_name VARCHAR(255) NOT NULL,
    anime_meigen VARCHAR(255) NOT NULL,
    PRIMARY KEY (anime_id)
);

CREATE TABLE music(
    music_id CHAR(3) NOT NULL ,
    music_name VARCHAR(255) NOT NULL,
    music_meigen VARCHAR(255) NOT NULL,
    PRIMARY KEY (music_id)
);