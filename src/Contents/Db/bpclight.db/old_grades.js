/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('old_grades', { 
    Kgra: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kcgr: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibGrac: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibGra: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Gesper: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Statut: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CatFP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TechAdm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    HSDroit: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
