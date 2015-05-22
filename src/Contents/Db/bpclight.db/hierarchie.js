/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hierarchie', { 
    Khie: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kuni: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Ksub: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kser: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Krol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
