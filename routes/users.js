var express = require('express');
var router = express.Router();


/* Check user account (sign-in) | Body : email (sorayacantos@gmail.com), password (zaza!12Z) | Response : response(), user, team */
router.post('/sign-in', async function(req, res, next) {
  let searchUserByEmail = {} // User récupéré de la bdd
  let passwordFromBdd = 'zaza12!Z'; // Mot de passe de la bdd

  if (searchUserByEmail) {
  var result = false
  if(searchUserByEmail && req.body.password == passwordFromBdd){
    result = true
  }

  if(result){
    res.json({response: 'connect'})
  } else {
    res.json({response: 'mot de passe incorrect'})
  }
}
});

/*Create user account type manager (sign-up) | Body : lastName (Cantos), firstName(Soraya), password(1234), password2(1234), company(LaCapsule), jobTitle(developper) | Response : "" */
router.post('/sign-up-manager',async function(req, res, next) {
  
  let email = req.body.email
  let lastName = req.body.lastName
  let firstName = req.body.firstName
  let password = req.body.password
  let password2 = req.body.password2
  let company = req.body.company
  let jobTitle = req.body.jobTitle

  if(lastName && firstName && password && password2 && company && jobTitle && email ){
    if (password == password2){
      //Création du user Manager en BDD
      //Création du user en bdd
      //Création de la team en BDD

      res.json({response:"compte crée"})
    } else {
      res.json({response: 'les mots de passe ne correspondent pas'})
    } 
  } else {
    res.json({response: 'Merci de renseigner tous les champs'})
  }
});

/*Ajout d'un collab par le manager */
router.post('/add-collab', async function(req, res, next) {
  let email = req.body.collabEmail;
  var userExist;
  // Si le collab n'existe pas on crée le user
  //création user en bdd}
  // Si le user existe on passe ses listen à isActive = false
  // On élimine le collab de son ancienne team
  // On crée un listen pour ce collab
  // Ajout du collab dans la team du manager connecté
  // Populate pour accéder aux informations des collaborateurs pour ne filtrer que les collabs actifs
  // Reconstitution d'un tableau avec les ids, les prénoms et les noms des collabs de la team auquel on associe la réponse du collab et le feedback du manager des listen actifs
  res.json({response:'Collaborateur ajouté'})
});

module.exports = router;
