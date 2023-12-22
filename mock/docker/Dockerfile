FROM node

ARG SERVICE_NAME

RUN apt-get update && apt-get install -y cron

RUN mkdir -p /home/app
COPY . /home/app

COPY crontab /etc/cron.d/my-cron
RUN chmod 0644 /etc/cron.d/my-cron
RUN crontab /etc/cron.d/my-cron
RUN touch /var/log/cron.log

RUN echo $SERVICE_NAME > /home/app/server_id.txt
RUN ps -e | wc -l > /home/app/running_processes.txt
RUN uname -m > /home/app/architecture.txt
RUN echo $SERVICE_NAME > /home/app/server_id.txt
RUN apt list --upgradable | wc -l > /home/app/pending_updates.txt
RUN df | awk 'NR==2 {print $4}' > /home/app/free_disk.txt
RUN who | wc -l > /home/app/ssh_open_sessions.txt
RUN free | awk 'NR==2 {print $4}' > /home/app/free_memory.txt

CMD ["sh", "-c", "service cron start && tail -f /var/log/cron.log & node /home/app/index.js"]

