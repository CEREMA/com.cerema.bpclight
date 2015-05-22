/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('_bpcandroid', { 
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
    Telephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibMelA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibBatC: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
