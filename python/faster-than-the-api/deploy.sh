docker run \
    --rm \
    -p 8080:80 \
    --name="apacz" \
    -v ./static/:/usr/local/apache2/htdocs/ \
    httpd:latest

# Might want to add the '-d' flag to daemonise the apache server
