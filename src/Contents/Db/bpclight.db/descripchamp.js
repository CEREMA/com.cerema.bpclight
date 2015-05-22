/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('descripchamp', { 
    Kdes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    haut: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    gauche: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    largeur: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    hauteur: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    panel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    caption: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Descrip: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    indice: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
