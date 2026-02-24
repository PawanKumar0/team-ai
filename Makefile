.PHONY: up down restart logs ps shell-api shell-web

up:
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose restart

logs:
	docker-compose logs -f

ps:
	docker-compose ps

shell-api:
	docker-compose exec api sh

shell-web:
	docker-compose exec web sh
