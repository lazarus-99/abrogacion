#!/bin/bash

file='./src/data/diputados.csv'

echo 'url,name,img,name_short,email,city,party,type_nominal,type,circunscription,comission,comity,official_charge,name,comision_charge' > $file

cat ./src/data/diputados.raw | \
  rg -v '^<tr' | \
  rg '<td>Titular</td>' | \
  sed -E 's/\s*<\/tr>$//' | \
  sed -E 's/^<td>/"/' | \
  sed -E 's/<a[^>]*href="//' | \
  sed -E 's/<\/a>//' | \
  sed -E 's/\/">/","/' | \
  sed -E 's/<\/td><td>/","/g' | \
  sed -E 's/<\/td>$/"/' >> $file
