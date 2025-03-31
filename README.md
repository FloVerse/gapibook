# Librairie en ligne - Vue.js + Google Books API

Une application web simple développée avec **Vue.js**, permettant de rechercher et consulter des livres via l'API **Google Books**, avec des filtres avancés : eBook, Gratuit, Récent, Auteur.

## Fonctionnalités

- Recherche de livres par mots-clés
- Filtres dynamiques :
  - **eBook** : Afficher uniquement les livres numériques
  - **Gratuit** : Afficher uniquement les livres gratuits
  - **Récent** : Trier les résultats par date de publication décroissante
  - **Auteur** : Rechercher un livre par auteur
- Affichage détaillé du livre sélectionné
- Affichage de la liste des résultats

## 🖥Aperçu

| Page d'accueil avec recherche et filtres |
|:----------------------------------------:|
| ![Aperçu](docs/screenshot_home.png)     |

*(Pense à ajouter une capture d'écran du rendu dans `docs/`)*

## Structure

### Composant principal : `App`

Gère :
- La barre de recherche
- Les filtres
- L'affichage des résultats (`book`)
- L'affichage des détails du livre sélectionné (`detail`)

### Composants

- **Search** : champ de recherche
- **Book** : composant pour chaque livre trouvé
- **Detail** : composant affichant les informations détaillées d'un livre

### API

**Google Books API** utilisée via le fichier `useGoogleBookApi.js` :
- Recherche simple
- Recherche par eBook
- Recherche par livres gratuits
- Recherche par nouveauté
- Recherche par auteur

## Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/votre-utilisateur/librairie-vue.git
   cd librairie-vue
