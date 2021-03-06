<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Forbind fra din computer til EC2 via ssh
## Nøglepar

Når du opretter en EC2 instans bliver du som det sidste bedt om enten at bruge et eksisterende nøgle par eller oprette et nyt. Da det er første gang du gør det skal du oprette et nyt og downloade det til din computers download mappe. Fremover kan du bruge det samme nøglepar.

![](../img/create_download_key.png)

## Forbind tíl din EC2 instance via terminalen.

###  Udfør følgende kommandoer på din lokale computer

```
	$ cd ~
	$ mkdir .ssh
```
### Flyt din *.pem fil fra download mappen til din nye .ssh mappe.    

#### eksempel    

```
	$ pwd
	/Users/clbo/Downloads
	$ mv myFirstKey.pem ../.ssh/myFirstKey.pem
```

### Sørg for at din .pem fil kun har privat read/write adgang.

```
	$ chmod 400 myFirstKey.pem
```

### SSH Connect to server:

```
	$ ssh -i “path-to-pem-file” ec2-user@<public DNS>
```

#### Example:

```
	$ ssh -i "myFirtKey.pem" ec2-user@ec2-18-196-109-146.eu-central-1.compute.amazonaws.com
```

Din <public DNS> finder du i dit EC2 Dashboard.    

Du vil formegentligt se en masse "warnings" når du forbinder. Det er som hovedregel fint og du behøver ikke tage stilling til dem.     

Når du er forbundet vil du se en prompt ala denne:

```
	[ec2-user@ip-172-31-63-172 ~]$
```



