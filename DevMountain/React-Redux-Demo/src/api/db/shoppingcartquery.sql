select
a.id
, cartid
, productid
, a.quantity
, b.ownerid as userid
, title
, price
, image_url

from cartitems a
join shoppingcart b
on a.cartid = b.id
join products c
on a.productid = c.id

where
b.ownerid = $1
