from fastapi import FastAPI
from middleware.cors import add_cors
from api.v1.endpoints import router as api_router

app = FastAPI()
add_cors(app)

app.include_router(api_router, prefix="/api/v1")