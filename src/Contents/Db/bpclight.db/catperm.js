/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('catperm', { 
    Kcpe: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    CatPerm: {
      type: 'CHAR(10)',
      allowNull: true,
    },
    DefPerm: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
