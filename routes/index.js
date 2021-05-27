var express = require('express');
var router = express.Router();


/* POST NEW-CAMPAIGN function-route. */
router.post('/new-campaign', async function(req, res, next) {
  let userId = req.body.idFromFront // du reduceur
  // Création listens avec managerId from team et collabId from team
  res.json ({response: 'Nouvelle campagne lancée'})
});

/* PUT SAVE-LISTEN function-route. */
router.put('/save-listen', async function(req, res, next) {
  let id = req.body.id;
  res.json ({response: true})
});


/* GET SEE-LISTEN function-route. */
router.get('/see-listen', async function(req,res,next){
  let id = req.query.collab;
  // le collaborateur a un listen rempli 
  res.json({result: true})
  
})


module.exports = router;
