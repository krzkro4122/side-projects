docker-compose up -d nginx
docker-compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot --email krolkrzysztof1999@gmail.com --agree-tos --no-eff-email -d krzysztofkrol.dev
openssl dhparam -out ./certbot/conf/ssl-dhparams.pem 2048
docker-compose down
docker-compose up -d