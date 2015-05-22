/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adresses', { 
    Kadr: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kpos: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kdep: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kpay: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Adresse: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Perso: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Verrou: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Date_derniere_modif: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  });
};
