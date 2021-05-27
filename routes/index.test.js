var app = require("../app")
var request = require("supertest")



test("Sign-up Manager, plusieurs champs sont vides", async (done) => {
  await request(app).post('/users/sign-up-manager')
    .send({ lastName: 'Roger', firstName: 'Michel' })
    .expect(200)
    .expect({response: 'Merci de renseigner tous les champs'});
  done();
});

test("Sign-up Manager, les mots de passe ne correspondent pas", async (done) => {
  await request(app).post('/users/sign-up-manager')
    .send({ lastName: 'Roger', firstName: 'Michel', email: 'zaza@zaza.com', password:'zaza12!Z', password2: 'zaza13!Z', company:'La Capsule', jobTitle:'Dev' })
    .expect(200)
    .expect({response: 'les mots de passe ne correspondent pas'});
  done();
});

test("Sign-up Manager, tout est ok", async (done) => {
  await request(app).post('/users/sign-up-manager')
    .send({ lastName: 'Roger', firstName: 'Michel', email: 'zaza@zaza.com', password:'zaza12!Z', password2: 'zaza12!Z', company:'La Capsule', jobTitle:'Dev' })
    .expect(200)
    .expect({response: 'compte crée'});
  done();
});

test("Sign-in utilisateur, les mots de passe correspondent", async (done) => {
  await request(app).post('/users/sign-in')
    .send({ password: 'zaza12!Z' })
    .expect(200)
    .expect({response: 'connect'});
  done();
});

test("Inviter un collaborateur, le collaborateur n'existe pas en bdd, on va l'ajouter", async (done) => {
  await request(app).post('/users/add-collab')
    .send({ collabEmail: 'zaza@zaza.com' })
    .expect(200)
    .expect({response: 'Collaborateur ajouté'});
  done();
});

test("On récupère l'id du manager et on crée de nouveaux listens pour toute sa team", async (done) => {
  await request(app).post('/new-campaign')
    .send({ idFromFront: '112DZSSS' })
    .expect(200)
    .expect({response: 'Nouvelle campagne lancée'});
  done();
});

test("On enregistre les réponses du collaborateur sur le Listen", async (done) => {
  await request(app).put('/save-listen')
    .send({ idFromFront: '112DZSSS' })
    .expect(200)
    .expect({response: true});
  done();
});

test("Route pour affichage du dernier listen", async (done) => {
  await request(app).get('/see-listen')
    .query({ collab: 'ZERG214' })
    .expect(200)
    .expect({ result: true });
  done();
 });