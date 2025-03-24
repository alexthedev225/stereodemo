#!/bin/bash

# Vérifier le statut des fichiers
git status

# Ajouter tous les fichiers modifiés
git add .

# Créer un commit avec un message
git commit -m "mise à jour du footer et autres modifications"

# Pousser les modifications vers le dépôt distant
git push origin main
