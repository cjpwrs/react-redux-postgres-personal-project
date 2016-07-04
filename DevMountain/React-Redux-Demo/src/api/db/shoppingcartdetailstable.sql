

drop table shoppingcartdetails

create table cartitems (
  id bigserial primary key,
  cartid int not null references shoppingcart(id),
  productid int not null references products(id),
  quantity int not null

);

insert into cartitems (cartid, productid, quantity)
values (1, 23, 3)


select
a.*,
d.username,
c.title

from cartitems a

join shoppingcart b
on a.cartid = b.id

join users d
on b.ownerid = d.id

join products c
on a.productid = c.id
