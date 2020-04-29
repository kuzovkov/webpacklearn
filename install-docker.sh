#!/bin/sh

sudo apt-get remove docker docker-engine docker.io

sudo apt-get update

sudo apt-get install -y linux-image-extra-$(uname -r) linux-image-extra-virtual

sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update

sudo apt-get install -y docker-ce

#On production systems, you should install a specific version of Docker CE instead of always using the latest. This output is truncated. List the available versions.

#apt-cache madison docker-ce

#sudo apt-get install docker-ce=<VERSION>

sudo docker run hello-world

#---------------------------
sudo curl -L https://github.com/docker/compose/releases/download/1.17.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
