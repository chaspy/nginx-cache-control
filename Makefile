up:
	docker-compose down
	docker-compose build
	docker-compose up

test:
	while true; do curl -s --dump-header - -o /dev/null localhost:8080; sleep 1; done

reload:
	docker-compose run web nginx -s reload
