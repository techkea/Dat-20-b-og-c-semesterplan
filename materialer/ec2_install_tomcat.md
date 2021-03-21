
<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

## Install Tomcat on EC2:

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

