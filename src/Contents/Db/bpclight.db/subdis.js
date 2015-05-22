/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subdis', { 
    Ksub: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kuni: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kadr: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    LibSubC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibSub: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    HorSect: {
      type: 'CHAR(10)',
      allowNull: true,
    },
    Code: {
      type: 'CHAR(10)',
      allowNull: true,
    },
    Telephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Fax: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Obs: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    CodHie: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Chemin: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Archive: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    },
    subGESPER: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Kets: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
