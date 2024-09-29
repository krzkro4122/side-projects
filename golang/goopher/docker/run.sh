#!/bin/bash

sudo docker stop gopher
sudo docker run --rm -d --name gopher -p 9000:9000 -i layor/gopher:latest
