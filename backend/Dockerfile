# Use the latest version of Python (as of writing, 3.12.5)
FROM python:3.12.5

# Set to not buffer standard output
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /backend

# Copy requirements.txt into the container
ADD requirements.txt /backend/

# Install libraries for FastAPI and PostgreSQL
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the application into the container
ADD . /backend/