# Application Front Stock Car
Ce projet contient le code de la partie Front du projet Stock Car. Il est composé de code HTML, CSS et JavaScript intéragissant avec la partie Back.

# Prérequis
1. Installer en premier la partie Back de l'application Stock Car

# Installation

1. Déployer le fichier War (dans target) dans un serveur d'application (Tomcat)
2. Modifier le fichier de configuration situé dans webapps/esieaFront/conf.js (notamment l'url vers le Back)
3. Tester le fonctionnement de l'application en ouvrant l'application : http://localhost:8080/esieaFront
4. Un ensemble de voitures apparaissent dans le tableau

# Tests d'intégration 
Les tests ont réalisés avec cypress, pour lancer les tests il faut se placer dans le chemin :

esieaFront\test\cypress\cypress\e2e : test.cy.js

Lancer ensuite la commande : npx cypress run 

* pour les tests d'affichage du détails de voiture & recherche de voiture :
  - Il faut mettre la premiére valeur (voiture) du tableau de la liste des voitures

