/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('passeport', { 
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    IdHabilitation: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    IdAgent: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    IdContact: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Login: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    UID: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Actif: {
      type: 'BIT(1)',
      allowNull: true,
    },
    DateDerCon: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  });
};
