/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mpaagent', { 
    id_MPA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    idMPALOLF: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    quotite_MPA: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    debut_MPA: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fin_MPA: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    delete_MPA: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    }
  });
};
