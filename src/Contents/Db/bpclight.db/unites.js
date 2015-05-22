/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unites', { 
    Kuni: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kadr: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    LibUnic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibUni: {
      type: DataTypes.STRING,
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
    uniGESPER: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Kets: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
