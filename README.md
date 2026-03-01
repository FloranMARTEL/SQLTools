# SQLTools

## Description

SQLTools est une application web conçue pour optimiser la gestion des bases de données relationnelles. Elle permet d'analyser des tables CSV, de détecter automatiquement les dépendances fonctionnelles, de calculer les couvertures minimales et de trouver les clés candidates.

## Fonctionnalités

### 1. Analyse de tables CSV
- Import de fichiers CSV pour analyser la structure des tables
- Détection automatique des dépendances fonctionnelles
- Affichage des résultats dans une interface intuitive

### 2. Algorithme de couverture minimale
- Calcul de la couverture minimale des dépendances fonctionnelles
- Interface pour saisir manuellement les dépendances
- Visualisation étape par étape du processus

### 3. Recherche de clés candidates
- Identification des clés candidates à partir des dépendances fonctionnelles
- Calcul de la forme normale des relations
- Interface pour saisir les attributs et les dépendances

## Structure du projet

```
SQLTools/
├── index.html              # Page principale de l'application
├── README.md               # Documentation du projet
├── CSVExemple.csv          # Exemple de fichier CSV
├── TextExempl.txt          # Exemple de dépendances fonctionnelles
├── assets/
│   └── image/
│       ├── csv.png         # Icône CSV
│       └── fleche.png      # Icône flèche
├── css/
│   ├── generale.css       # Styles généraux
│   ├── index.css          # Styles spécifiques
│   ├── police.css         # Styles de police
│   └── var.css            # Variables CSS
└── js/
    ├── index.js             # Point d'entrée principal
    ├── controleur/         # Contrôleurs métier
    │   ├── AlgoritmeCM.js  # Algorithme couverture minimale
    │   ├── FindCleCandidate.js # Recherche clés candidates
    │   ├── FindDF.js       # Détection dépendances fonctionnelles
    │   ├── Getfiles.js     # Gestion fichiers CSV
    │   └── model/
    │       ├── DependanceFonctionnelle.js # Modèle dépendances
    │       ├── Table.js      # Modèle table
    │       └── DAO/         # Accès données
    │           ├── DAOcsv.js  # DAO CSV
    │           └── DAOText.js # DAO Texte
    │       └── lib/         # Extensions utilitaires
    │           ├── ExtensionArray.js
    │           ├── ExtensionSet.js
    │           └── ExtensionString.js
    └── vue/                 # Composants Vue
        ├── BlockDeroulant.js
        ├── ButtonfindDF.js
        ├── Errormessage.js
        ├── InputFile.js
        └── TableauTable.js
```

## Architecture technique

### Frontend
- HTML5, CSS3, JavaScript ES6+
- Architecture modulaire avec import/export
- Composants Vue personnalisés

### Backend
- Application purement frontend (pas de backend)
- Traitement des données en JavaScript
- Algorithmes développés en interne

## Lancement du projet

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation requise

### Méthodes de lancement

#### Méthode 1: Serveur local (recommandé)
```bash
# Méthode avec Python 3
python -m http.server 8000

# Méthode avec Node.js
npx serve .

# Méthode avec PHP
php -S localhost:8000
```

#### Méthode 2: Ouverture directe
1. Double-cliquez sur `index.html`
2. Ou utilisez `Ctrl+O` dans votre navigateur
3. Sélectionnez le fichier `index.html`

#### Méthode 3: VS Code
1. Ouvrez le dossier du projet dans VS Code
2. Installez l'extension Live Server
3. Cliquez sur "Go Live" dans la barre d'état

## Utilisation

### Étape 1: Analyse d'un fichier CSV
1. Cliquez sur "Sélectionner mon fichier"
2. Choisissez un fichier CSV
3. Cliquez sur "trouver les relations"

### Étape 2: Calcul de la couverture minimale
1. Saisissez les dépendances fonctionnelles dans le format `A -> B`
2. Cliquez sur "Trouver une couverture minimal"

### Étape 3: Recherche de clés candidates
1. Saisissez les attributs (séparés par des virgules)
2. Saisissez les dépendances fonctionnelles
3. Cliquez sur "Trouver les clés"

## Exemples

### Exemple CSV
```csv
A,B,C,D
a1,b1,c1,d1
a1,b2,c1,d1
a2,b1,c1,d1
a3,b1,c1,d1
a4,b2,c2,d2
a4,b3,c2,d2
a4,b1,c3,d2
```

### Exemple dépendances fonctionnelles
```
A -> I
A -> C
A,C -> V
V -> I
```

## Technologies utilisées

### Algorithmes implémentés
- Détection automatique des dépendances fonctionnelles
- Algorithme de couverture minimale (3 étapes)
- Recherche récursive de clés candidates

### Extensions JavaScript
- `ExtensionArray`: Méthodes group by et égalité
- `ExtensionSet`: Méthodes d'égalité, sous-ensemble, différence
- `ExtensionString`: Encodage/décodage hexadécimal

## Licence

Ce projet est open source et disponible sous licence MIT.

## Contributeurs

- Floran MARTEL (développeur principal)

## Support

Pour toute question ou problème, veuillez consulter la documentation ou créer une issue sur le dépôt GitHub.