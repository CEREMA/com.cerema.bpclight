/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visiom', { 
    kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LIBELLE_POSTE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FAMILLE_PROF: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EMPLOI_TYPE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    REHUCIT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NOM: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PRENOM: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DATE_NAISSANCE: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
