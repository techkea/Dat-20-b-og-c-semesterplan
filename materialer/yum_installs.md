<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script.js"></script>

# Installation af programmer (Packages) på en Amazon Linux2 Machine 

På linux maskiner skal i bruge en package manager til at installere programmer. 

Jer med en Mac har indtil nu brugt ´brew´ til at installere programmer. På linux bruger vi samme princip, men package manageren har bare et andet navn. 

På windows har i ikke brugt en package manager, så for jer er princippet nyt.

## Yum
På den type af linux machine i kommer til at arbejde med (Red Hat) hedder package manageren YUM. Med yum kan i installere, updatere, og fjerne packages.

**eksempeler**    

Hvis du vil installerer Java SDK vil du skulle udføre komandoen:

```
 	$ sudo yum install java-1.8.0-openjdk-devel -y
```
Og hvis du vil installerer GIT vil du skulle udføre komandoen:

```
 	$ sudo yum install git -y
```


## sudo
For at kunne installere packages på en linux maskine skal du være ´root´ user, eller ´superuser´. Som udgangspunkt er dit brugernavn på dit AMI ´ec2-user´. Hvis du prefixer dine kommandoer med ´sudo´ vil du kører kommando som root, og du vil blive spurgt om dit root password (med mindre du er logget ind som root). 

SUDO er en forkortelse af ´superuser do´.    

Du kan ved at skrive ```sudo su``` skifte til at root permanent.    
