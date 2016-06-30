CREATE TABLE users
 (
     id bigserial primary key,
     username varchar(124),
     firstname varchar(64),
     lastname varchar(64),
     email varchar(64),
     phone varchar(16),
     password varchar(64),
     street varchar(124),
     street2 varchar(124),
     city varchar(64),
     state varchar(64),
     zip varchar(12)
 );
