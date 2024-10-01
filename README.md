# Stop Docker
```
docker compose down
```

# Restart Docker
```
docker compose up -d
``` 

# Enter to the backend containter
```
docker-compose exec backend /bin/sh
```

# Migration in the backend container
alembic revision --autogenerate -m "description_of_your_change"
alembic upgrade head
