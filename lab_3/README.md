# Instruction

## Create mysql container

```console
docker run -d -p 3306:3306 --name=mysql -v /Users/alex/projects/nuwm/tcs/lab_3/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=test_db mysql/mysql-server:latest
```

## Create myadmin container

```console
docker run -d --name myadmin --link mysql:db -e PMA_HOST=mysql -e PMA_USER=root -e PMA_PASSWORD=root -p 8080:80 phpmyadmin/phpmyadmin:latest
```

## Alternative variant

```console
docker run --name dev-mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
docker run --name dev-myadmin -d --link dev-mysql:db -p 7098:80 phpmyadmin/phpmyadmin
```
