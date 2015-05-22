/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_anubis', { 
    Nom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Prenom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Matri: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Poste: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Portable: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibMelA: {
      type: DataTypes.STRING,
      allowNull: true,
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
    LibBatC: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
