update products
set title = $2
, category = $3
, who_made_it = $4
, what_is_it = $5
, when_was_it_made = $6
, price = $7
, quantity=$8
where id = $1;
