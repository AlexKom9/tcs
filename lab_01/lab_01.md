# Lab 1

## docker run hello-world

```console
➜  ~ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:6e8b6f026e0b9c419ea0fd02d3905dd0952ad1feea67543f525c73a0a790fefb
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## docker images hello-world

```console
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    46331d942d63   11 months ago   9.14kB
```

## ellerbrock/alpine-bash-git container

```console
➜  lab_01 git:(master) ✗ docker run -it --entrypoint /bin/bash ellerbrock/alpine-bash-git
bash-4.4$ whoami
download
bash-4.4$ ls -la
total 8
drwxr-sr-x    2 download download      4096 Oct 15  2019 .
drwxr-xr-x    1 root     root          4096 Oct 15  2019 ..
bash-4.4$ cd /
bash-4.4$ ls -la
total 60
drwxr-xr-x    1 root     root          4096 Mar  7 22:27 .
drwxr-xr-x    1 root     root          4096 Mar  7 22:27 ..
-rwxr-xr-x    1 root     root             0 Mar  7 22:27 .dockerenv
drwxr-xr-x    1 root     root          4096 Oct 15  2019 bin
drwxr-xr-x    5 root     root           360 Mar  7 22:27 dev
drwxr-xr-x    1 root     root          4096 Mar  7 22:27 etc
drwxr-xr-x    1 root     root          4096 Oct 15  2019 home
drwxr-xr-x    1 root     root          4096 Oct 15  2019 lib
drwxr-xr-x    5 root     root          4096 Mar  6  2019 media
drwxr-xr-x    2 root     root          4096 Mar  6  2019 mnt
dr-xr-xr-x  185 root     root             0 Mar  7 22:27 proc
drwx------    2 root     root          4096 Mar  6  2019 root
drwxr-xr-x    2 root     root          4096 Mar  6  2019 run
drwxr-xr-x    2 root     root          4096 Mar  6  2019 sbin
drwxr-xr-x    2 root     root          4096 Mar  6  2019 srv
dr-xr-xr-x   13 root     root             0 Mar  7 22:27 sys
drwxrwxrwt    2 root     root          4096 Mar  6  2019 tmp
drwxr-xr-x    1 root     root          4096 Oct 15  2019 usr
drwxr-xr-x    1 root     root          4096 Oct 15  2019 var
bash-4.4$ git version
git version 2.18.1
bash-4.4$
```

### cloning any repo to home directory

```console
bash-4.4$ cd ~
bash-4.4$ git clone https://github.com/puleos/object-hash.git
Cloning into 'object-hash'...
remote: Enumerating objects: 999, done.
remote: Counting objects: 100% (63/63), done.
remote: Compressing objects: 100% (30/30), done.
remote: Total 999 (delta 33), reused 61 (delta 33), pack-reused 936
Receiving objects: 100% (999/999), 823.38 KiB | 3.47 MiB/s, done.
Resolving deltas: 100% (567/567), done.
bash-4.4$ ls -la
total 12
drwxr-sr-x    3 download download      4096 Mar  7 22:49 .
drwxr-xr-x    1 root     root          4096 Oct 15  2019 ..
drwxr-sr-x    5 download download      4096 Mar  7 22:49 object-hash
bash-4.4$
```

### reboot docker container

```console
bash-4.4$ exit
exit
➜  lab_01 git:(master) ✗ docker run -it --entrypoint /bin/bash ellerbrock/alpine-bash-git
bash-4.4$ ls -la
total 8
drwxr-sr-x    2 download download      4096 Oct 15  2019 .
drwxr-xr-x    1 root     root          4096 Oct 15  2019 ..
bash-4.4$
```
