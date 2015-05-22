/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ageaut', { 
    Kaat: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kpie: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Ksig: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    DatAutV: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatDebV: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatFinV: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    NumAut: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
