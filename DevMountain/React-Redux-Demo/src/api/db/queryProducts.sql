select *
from products a

join users b
on a.ownerId = b.id
