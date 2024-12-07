User:

id : Identifiant unique (PK).
name : Nom de l'utilisateur.
password : Mot de passe.
balance : Solde de crypto virtuelle.

Game :

id : Identifiant unique (PK).
userId : Identifiant de l'utilisateur (FK vers User.id).
bet : Mise pour la partie.
result : Résultat de la partie (ex. "gain", "perte", ou "nul").
createdAt : Date et heure de la partie.

Cardinalité entre User et Game :
1 utilisateur (User) peut jouer plusieurs parties (Game).
Une partie (Game) est toujours associée à un seul utilisateur (User).
