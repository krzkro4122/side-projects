FROM nginx:latest

COPY dist /usr/share/nginx/html

CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 5003;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
