CREATE DATABASE hp

CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    founder VARCHAR(100) NOT NULL
);

CREATE TABLE wizards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    house_id INTEGER REFERENCES houses(id) ON DELETE SET NULL
);

INSERT INTO houses (name, founder) VALUES 
    ('Grifinória', 'Godric Gryffindor'),
    ('Sonserina', 'Salazar Slytherin'),
    ('Corvinal', 'Rowena Ravenclaw'),
    ('Lufa-Lufa', 'Helga Hufflepuff');

INSERT INTO wizards (name, house_id) VALUES 
    ('Harry Potter', 1),
    ('Draco Malfoy', 2),
    ('Luna Lovegood', 3),
    ('Cedrico Diggory', 4),
    ('Hermione Granger', 1),
    ('Ron Weasley', 1),
    ('Neville Longbottom', 1),
    ('Ginny Weasley', 1),
    ('Pansy Parkinson', 2),
    ('Bellatrix Lestrange', 2),
    ('Severus Snape', 2),
    ('Cho Chang', 3),
    ('Padma Patil', 3),
    ('Terry Boot', 3),
    ('Ernie Macmillan', 4),
    ('Hannah Abbott', 4),
    ('Nymphadora Tonks', 4),
    ('Susan Bones', 4),
    ('Percy Weasley', 1),
    ('Fred Weasley', 1),
    ('George Weasley', 1),
    ('Lavender Brown', 1),
    ('Dean Thomas', 1),
    ('Parvati Patil', 1),
    ('Millicent Bulstrode', 2),
    ('Vincent Crabbe', 2),
    ('Gregory Goyle', 2),
    ('Marcus Flint', 2),
    ('Michael Corner', 3),
    ('Anthony Goldstein', 3),
    ('Roger Davies', 3),
    ('Zacharias Smith', 4),
    ('Justin Finch-Fletchley', 4),
    ('Megan Jones', 4),
    ('Eleanor Branstone', 4);

