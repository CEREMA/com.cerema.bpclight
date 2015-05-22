/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('societes', { 
    Ksoc: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kfam: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kpos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibSocc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibSoc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Adresse: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Web: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Mel: {
      type: DataTypes.TEXT,
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
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
