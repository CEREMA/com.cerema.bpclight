/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type_formation', { 
    id_formation: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Libelle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frequence: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  });
};
