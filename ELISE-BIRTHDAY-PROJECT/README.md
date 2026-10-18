# Élise Birthday Experience

Mini-site d'anniversaire responsive, avec lecteur audio, animation d'étoiles, lettre, surprise interactive et crédits.

## Démarrage rapide sous Windows

1. Décompresse le dossier.
2. Double-clique sur `LANCER-SITE.bat`.
3. Le site s'ouvrira sur `http://127.0.0.1:8000`.

Python 3 doit être installé. Le serveur reste local à l'ordinateur ; il n'est pas exposé sur Internet.

## Fichiers importants

- `index.html` : structure du site.
- `css/style.css` : apparence et responsive.
- `js/main.js` : musique, animations et surprise.
- `assets/audio/musique-anniversaire.mp3` : audio déjà intégré.
- `assets/images/aizen-createur.png` : avatar Aizen du créateur Appia Karl David.
- `assets/images/ambiance-anniversaire.png` : visuel d'ambiance.
- `assets/images/photo-elise-a-ajouter.jpg` : emplacement prévu pour la seconde photo.

## Ajouter la seconde photo

Place la photo dans `assets/images/` sous le nom exact `photo-elise-a-ajouter.jpg`. Si elle est en PNG, convertis-la en JPG ou modifie `src` de `#elisePhoto` dans `index.html`.

## Personnalisation

Les couleurs principales se modifient au début de `css/style.css` dans `:root`. Pour changer l'audio, remplace `assets/audio/musique-anniversaire.mp3` par un autre fichier MP3 en gardant le même nom.

## Note sur la lecture audio

Les navigateurs empêchent généralement la lecture automatique avec son. Clique sur « Lancer la musique » pour démarrer l'audio.
