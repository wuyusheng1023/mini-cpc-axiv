FROM python:3.9.4

COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt

RUN mkdir -p /app
COPY /app/ /app/

WORKDIR /app

ENV FLASK_DEBUG=0 PYTHONUNBUFFERED=1
CMD flask run --host=0.0.0.0 --port=5000
