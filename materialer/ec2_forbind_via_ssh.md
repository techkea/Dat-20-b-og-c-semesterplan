<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Forbind fra din computer til EC2 via ssh
## Nøglepar

Når du opretter en EC2 instans bliver du som det sidste bedt om enten at bruge et eksisterende nøgle par eller oprette et nyt. Da det er første gang du gør det skal du oprette et nyt. Fremover kan du bruge det samme.

<!-- Her skal være et par screen shots med keypair oprettelse og download.-->



## Forbind tíl din EC2 instance via terminalen.

###  Udfør følgende kommandoer på din lokale computer

```
	$ cd ~
	$ mkdir .ssh
```
## Flyt din *.pem fil fra download mappen til din nye .ssh mappe.    

### eksempel    

```
	$ pwd
	/Users/clbo/Downloads
	$ mv myFirstKey.pem ../.ssh/myFirstKey.pem
```

## Sørg for at din .pem fil kun har privat read/write adgang.

```
	$ chmod 400 myFirstKey.pem
```

## SSH Connect to server:

```
	$ ssh -i “path-to-pem-file” ec2-user@<public DNS>
```

### Example:

```
	$ ssh -i "myFirtKey.pem" ec2-user@ec2-18-196-109-146.eu-central-1.compute.amazonaws.com
```

