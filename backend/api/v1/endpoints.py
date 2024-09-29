# backend/api/v1/endpoints.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_root():
    return {"Hello": "World v1"}
