FROM python:3.9
WORKDIR /development/bot
ENV BOT_SERVER=server.py
ENV SERVER_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["python", "server.py"]