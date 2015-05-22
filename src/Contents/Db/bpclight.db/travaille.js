/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('travaille', { 
    ID_SOUS_DOMAINES: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
    },
    ID_MATRICULE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
