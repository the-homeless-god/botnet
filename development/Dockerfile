FROM python:3.9
WORKDIR /development
COPY . .
ADD  . .

ENV BOT_SERVER=server.py
ENV SERVER_RUN_HOST=0.0.0.0

CMD apk add --no-cache gcc musl-dev linux-headers

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "/development/bot/server.py"]