/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('domaines', { 
    ID_DOMAINE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
    },
    NOM_DOMAINE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
