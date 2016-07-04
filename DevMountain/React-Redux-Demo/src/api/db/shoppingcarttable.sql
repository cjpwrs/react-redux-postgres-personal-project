create table shoppingcart (
  id bigserial primary key,
  last_updated timestamp,
  ownerid int references users(id) not null
)

insert into shoppingcart (last_updated, ownerid)
values ('2008-09-03 00:00:00', 1)
