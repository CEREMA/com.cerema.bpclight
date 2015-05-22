/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quotite', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    matri: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    horcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quotite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
