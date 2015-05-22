/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ageautpers', { 
    Kaap: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kpie: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kvmk: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kvmd: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kvas: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Ksig: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    DatAut: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Ponct: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Immat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NumPol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Zone: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    KmAut: {
      type: 'DOUBLE',
      allowNull: true,
    },
    KmAdd: {
      type: 'DOUBLE',
      allowNull: true,
    },
    DatDeb: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatFin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
