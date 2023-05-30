# Lab 6

```console
VERSION=v0.47.0 # use the latest release version from https://github.com/google/cadvisor/releases
sudo docker run \
  --volume=/:/rootfs:ro \
  --volume=/var/run:/var/run:ro \
  --volume=/sys:/sys:ro \
  --volume=/var/lib/docker/:/var/lib/docker:ro \
  --volume=/dev/disk/:/dev/disk:ro \
  --publish=8080:8080 \
  --detach=true \
  --name=cadvisor \
  --privileged \
  --device=/dev/kmsg \
  gcr.io/cadvisor/cadvisor:$VERSION
```

## Initial system state

![Screen 1](./screens/docker_ps_initial.jpg)
![Screen 2](./screens/system_state_initial.jpg)

## Lab 4 system state

![screen 1](./screens/docker_ps_lab_4.jpg)
![screen 2](./screens/system_state_lab_4.jpg)

## Lab 5 system state

![Screen 1](./screens/docker_ps_lab_5.jpg)
![Screen 2](./screens/system_state_lab_5.jpg)

## Error 😕

http://localhost:8080/docker/

```console
failed to get docker info: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

![Error screen](./screens/cAdvisor-docker-error.jpg)
![Console screen](./screens/console.jpg)

[github issue](https://github.com/docker/for-mac/issues/6531)
