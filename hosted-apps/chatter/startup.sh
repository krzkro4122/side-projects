docker-compose -f chatter-docker/docker-compose.yaml down
docker-compose -f chatter-docker/docker-compose.yaml up -d
sleep 10
bash populate.sh
