/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacts', { 
    Kcon: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Ksoc: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Nom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Prenom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Mel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Telephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Portable: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Fax: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Fonction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DatMaj: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
