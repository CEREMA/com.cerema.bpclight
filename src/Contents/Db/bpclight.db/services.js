/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('services', { 
    Kser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Ksub: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kadr: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    LibSerC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibSer: {
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
    Code: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
