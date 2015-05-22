/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sous_domaines', { 
    ID_SOUS_DOMAINES: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
    },
    ID_DOMAINE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
    },
    NOM_SOUS_DOMAINES: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
