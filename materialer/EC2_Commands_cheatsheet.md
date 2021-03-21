# EC2 Commands Cheatsheet

## Unix terminal commands and file system
[Unix Commands](unix_commands.md)

## Your key must not be publicly viewable for SSH to work. Use this command if needed:

```
	$ chmod 400 MyKeyFile.pem
```

## SSH Connect to server:

```
	$ ssh -i “path-to-pem-file” ec2-user@<public DNS>
```

### Example:

```
	$ ssh -i "testec2.pem" ec2-user@ec2-18-196-109-146.eu-central-1.compute.amazonaws.com
```

## Download and Install updates for Linux OS (EC2)

```
	$ sudo yum update -y
```

## Run rest of the session as root

```
	$ sudo su
```

## Install Tomcat:

## Install jdk:
```
	$ sudo yum install java-1.8.0-openjdk-devel -y
```

### Install wget

```
	$ sudo yum install wget
```

Then, change to your home directory:    

```
	$ cd ~
```
Now, use wget and paste in the link to download the Tomcat 9 archive, like this:
```
	$ wget https://mirrors.dotsrc.org/apache/tomcat/tomcat-9/v9.0.44/bin/apache-tomcat-9.0.44.tar.gz

```

We’re going to install Tomcat to the /opt/tomcat directory. Create the directory, then extract the the archive to it with these commands:

```
	$ sudo mkdir /opt/tomcat
	$ sudo tar xvf apache-tomcat-9*tar.gz -C /opt/tomcat --strip-components=1
```


Start, stop or check status of tomcat server:

```
	$ sudo service tomcat8 start
	$ sudo service tomcat8 stop
	$ sudo service tomcat8 status
	$ sudo service tomcat8 restart
```

Open in web browser:

```
	http://server_IP_address:8080
```

## Move file from local-machine to EC2:
```
	$ scp -i /path/to/your/.pemkey -r /copy/from/path user@server:/copy/to/path
```


### Example: 
```
	$ scp -i testec2.pem -r Hello.java ec2-user@52.28.10.8:/home/ec2-user
```

## Compile java file:

```	
	$  javac <NAME-OF-FILE>
```
### Example: 
```
	$ javac Hello.java
```
## Run Java app
```
	$ java <NAME-OF-FILE>
```
### Example
```
	$ java Hello
```

## Check Java version:
```
	$ java -version
```

