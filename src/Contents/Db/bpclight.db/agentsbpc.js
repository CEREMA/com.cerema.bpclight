/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentsbpc', { 
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kpos: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kres: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Nom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Prenom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Matri: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Adresse: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    AdrePers: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
};
