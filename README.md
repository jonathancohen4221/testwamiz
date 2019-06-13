## Installer le Projet TEST WAMIZ en Local

 - **Cloner le projet** : `git clone git@github.com:jonathancohen4221/testwamiz.git`
 
 - **Installer les paquets et leurs dépendances :** `npm install` (si npm n'est pas installé : [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)). Tout devrait s'installer mais si vous rencontrez des problèmes : 
     - **Si Gulp n'est pas installé sur la machine:** Vérifier que node et npm installé puis lancer la commande : `npm install --global gulp-cli`[( https://gulpjs.com/docs/en/getting-started/quick-start](https://gulpjs.com/docs/en/getting-started/quick-start)) afin d'installer gulp en global sur la machine.
     
     - **Si SASS n'est pas installé sur la machine**: `npm install -g sass`.
 - **Lancer le projet en local avec la commande** : `gulp serve`.
 - **Se mettre sur la branche integration**: `git checkout integration`.
