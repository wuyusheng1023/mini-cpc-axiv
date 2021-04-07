build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down --remove-orphans

logs:
	docker-compose logs --tail=100

clear-docker-images:
	docker rmi $(docker images -f "dangling=true" -q) 

clear-docker-containers:
	docker rm $(docker ps -a -f status=exited -q)

clear-docker-volumes:	
	docker volume prune -f
 
all: down build up
