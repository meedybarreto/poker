module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', 
        key: 'id',
      },
    },
    bet: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    result: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
  
  Game.associate = (models) => {
    Game.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  
  return Game;
};
  