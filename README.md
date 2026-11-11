# LOTO AZARAKOR 3

Application installable sur téléphone, utilisable hors ligne.
Option 1 (80 grilles par pivot) et Option 2 (480 grilles par pivot). Feuilles GROUPE 1 à 9, saisie du tirage officiel, grilles gagnantes, paires, compteurs des pivots, analyse des numéros (écart, fréquence, chauds, froids, prédiction).
LOME-TOGO · Tel.: +22890399015 · Tel.: +22898708818

## Fichiers (tous au même niveau, sans dossier)

- index.html (l'application)
- manifest.webmanifest (nom et icône à l'installation)
- sw.js (fonctionnement hors ligne)
- icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png, favicon-32.png (icône dorée)

## Mise en ligne sur GitHub Pages

1. Sur github.com, créez un dépôt public, par exemple `loto-azarakor-3`.
2. Ouvrez le dépôt, touchez « Add file » puis « Upload files », choisissez les 8 fichiers ci-dessus et touchez « Commit changes ».
3. Allez dans « Settings » puis « Pages ». Sous « Build and deployment », choisissez « Deploy from a branch », la branche `main`, le dossier `/ (root)`, puis « Save ».
4. Après une à deux minutes, l'adresse apparaît en haut de la page « Pages » : `https://VOTRE-NOM.github.io/loto-azarakor-3/`

## Installation sur le téléphone

Ouvrez l'adresse ci-dessus, avec internet, une première fois. Attendez que la page soit entièrement affichée, puis :

- Android (Chrome) : menu ⋮ puis « Installer l'application » (ou « Ajouter à l'écran d'accueil »).
- iPhone (Safari) : bouton Partager puis « Sur l'écran d'accueil ».

L'icône dorée apparaît sur l'écran d'accueil. L'application s'ouvre ensuite sans internet.

## Mise à jour

Remplacez `index.html` sur GitHub. Dans `sw.js`, changez `azarakor3-v1` en `azarakor3-v2` (puis v3, ...) pour que les téléphones prennent la nouvelle version à la prochaine ouverture avec internet.

## Données

Le tirage saisi et la mémoire des compteurs sont gardés dans le navigateur du téléphone. Ils ne sont pas envoyés ailleurs et ne passent pas d'un appareil à l'autre.
