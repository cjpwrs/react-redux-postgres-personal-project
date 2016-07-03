select a.*
from products a

join users b
on a.ownerid = b.id

where
b.username = $1
