/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vm', { 
    kvm: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    nature_visite: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    date_visite: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    heure_visite: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    resultats: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    commentaires: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
