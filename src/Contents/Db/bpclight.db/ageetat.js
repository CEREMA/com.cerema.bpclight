/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ageetat', { 
    Keta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kpst: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Ketsnew: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kuninew: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Ksubnew: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Ksernew: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Ketsex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kuniex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Ksubex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kserex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    DatCre: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Arrivee: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Motif: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    DatEta: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatCPA: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatCFA: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatRet: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    PosFutur: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
