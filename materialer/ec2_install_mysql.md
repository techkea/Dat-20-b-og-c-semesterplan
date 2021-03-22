

<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>


# Install MariaDB (MySql) on EC2



## Install and Start MariaDB

```
	$ sudo yum update -y
	$ sudo yum install -y mariadb-server
	$ sudo systemctl start mariadb
	$ sudo systemctl enable mariadb

```
## Secure DB server. Select the relevant option's during command run.
```
	$ sudo mysql_secure_installation
```

Follow the instructions. (Remeber that you should end up having access from the world to your database, so do not make it to secure.)


## Connect to your Database

```
	$ mysql -u root -p
	password:

	MariaDB [(none)]>
```

Now you can write SQL commands against you database.

## Connecting through Mysql Workbench
Mysql Workbench is a GUI and GUIS we do not have on the EC2 instance.    
But you can connect your local version og MySql Workbench to the database on your ec2 instance. 

### First you need to create a user that have root priviledges.    

```
	$ CREATE USER 'remote'@'%' IDENTIFIED BY '1234';
	$ GRANT ALL PRIVILEGES ON *.* TO 'remote'@'%' WITH GRANT OPTION;
```
### Then you need to open the firewall from your EC2 dashboard. 

* Create a new **Inbound rule**, 
* choose **MYSQL/Aurora** 
* with port 3306 open 
* and have it open to the whole world **(0.0.0.0/0)**

### Create the connection from Mysql Workbench

* Open Mysql Workbench and create a new connection.
* Hostname: <public-ip> 
* port: 3306
* username: remote
* password: 1234

 














