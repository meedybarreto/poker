const sequelize = require('../config/database');
const User = require('./User'); // Exemple de modèle User
const Game = require('./Game'); // Exemple de modèle Game

// Synchroniser la base de données et les modèles
sequelize.sync({ force: false })  // Utilisez force: true pour recréer les tables à chaque lancement (avec prudence)
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });
