/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ageperm', { 
    Kape: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kcpe: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    NumPerm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DatObt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Verrou: {
      type: 'BLOB',
      allowNull: true,
    }
  });
};
