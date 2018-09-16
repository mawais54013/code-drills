-- First, we need to create the database for our list of nominees. pricewaterhousecoopers says they trust us to re-enter their old list of nominees... Little do they know, we're going to put in our own list of who we think the nominees should be. 

-- Create a database 
CREATE DATABASE emmysDB;

-- Make it clear that the database we want to refer to is the one we just created
USE emmysDB;

-- The table for emmy nominees must follow a very strict format. We must give it the following columns:
-- 1. nominee_id - an integer that increments automaticallly. It should not be null
-- 2. show_name - the name of the show (must be a string, even if it's 90210)
-- 3. num_seasons - an integer pointing to the number of existing seasons for a show
-- 4. genre - a string pointing to the genre of the show
-- 5. rating - This is a DECIMAL which can hold two digits after the decimal. (We will be using it to make ratings out of 10. For example: we will be inputting ratings like 7.67)
-- 6. Set nominee_id as the primary key

CREATE TABLE nominees (
    nominee_id INT NOT NULL AUTO_INCREMENT,
    show_name VARCHAR(1000) NOT NULL,
    num_seasons INT NULL,
    genre VARCHAR(100) NOT NULL,
    rating DECIMAL(10,2) NULL,
    PRIMARY KEY(nominee_id)
);


-- Let the fun begin!! Seed your database with the 5 best TV shows of all time!  
INSERT INTO nominees (show_name, num_seasons, genre, rating) 
VALUES ("Transformers Prime", 3, "Kids", 8);

INSERT INTO nominees (show_name, num_seasons, genre, rating) 
VALUES ("Star Wars Rebels", 4, "Kids", 9);

INSERT INTO nominees (show_name, num_seasons, genre, rating) 
VALUES ("Star Wars The Clone Wars", 7, "Kids", 10);

INSERT INTO nominees (show_name, num_seasons, genre, rating) 
VALUES ("Dancing With The Stars", 25, "Show", 7);

INSERT INTO nominees (show_name, num_seasons, genre, rating) 
VALUES ("Stranger Things", 3, "Drama/Horror", 8);

-- Paste all of this (feel free to remove the comments) into your work bench and run it. Verify that your table exists with all the shows you seeded into it
-- Return back to the readme


            