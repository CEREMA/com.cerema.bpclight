/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('catpiece', { 
    Kcpi: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    TypPiece: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    CatPiece: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
