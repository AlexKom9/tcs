# Instruction

## Create mysql container

```console
docker run -d -p 3306:3306 --name=mysql -v data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=test_db mysql/mysql-server:latest
```

## Create myadmin container

```console
docker run -d --name myadmin --link mysql:db -e PMA_HOST=mysql -e PMA_USER=root -e PMA_PASSWORD=root -p 8080:80 phpmyadmin/phpmyadmin:latest
```

## Grant permissions

```console
GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.17.0.3' IDENTIFIED BY 'root' WITH GRANT OPTION;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.17.0.3' IDENTIFIED BY 'root';

GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.17.0.3' IDENTIFIED BY root WITH GRANT OPTION;

```
