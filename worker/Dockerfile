FROM python:3.9.4

COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt

RUN mkdir -p /app
COPY /app/ /app/

WORKDIR /app

