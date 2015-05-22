/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recapitulatif', { 
    id_recapitulatif: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Session: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Nom_organisme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_formation: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    upload: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
};
