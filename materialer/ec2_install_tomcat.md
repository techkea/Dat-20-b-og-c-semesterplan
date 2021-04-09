
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
	$ wget https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.44/bin/apache-tomcat-9.0.44.tar.gz

```

We’re going to install Tomcat to the /opt/tomcat directory. Create the directory, then extract the the archive to it with these commands:

```
	$ sudo mkdir /opt/tomcat
	$ sudo tar xvf apache-tomcat-9*tar.gz -C /opt/tomcat --strip-components=1
```

Change directory to /opt/tomcat folder

```
	$ cd /opt/tomcat
```

If you do an **ls** command you should see the following:

```
	$ ls
	BUILDING.txt  CONTRIBUTING.md  LICENSE  NOTICE  README.md  RELEASE-NOTES  RUNNING.txt  bin  conf  lib  logs  temp  webapps  work
```

Change permanently to root access

```
	$ sudo su
```

Run startup.sh in bin folder to start Tomcat.    

```
	$ cd bin/
	$ ./startup.sh
```

You should now see somthing like this:

```
	Using CATALINA_BASE:   /opt/tomcat
	Using CATALINA_HOME:   /opt/tomcat
	Using CATALINA_TMPDIR: /opt/tomcat/temp
	Using JRE_HOME:        /
	Using CLASSPATH:       /opt/tomcat/bin/bootstrap.jar:/opt/tomcat/bin/tomcat-juli.jar
	Using CATALINA_OPTS:   
	Tomcat started.
```

Open in web browser:

```
	http://server_IP_address:8080
```

Be aware that the site should use http://, not https://

In order to be able to access the site you should configure a rule under the "security" tab in your EC2 instance.  


Configuration files are founc in the conf/ folder.

