/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agepiece', { 
    Kpie: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kcpe: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    TypPie: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    NumPie: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DatPie: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatVal: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    SignPie: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
