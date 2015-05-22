/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', { 
    Kuse: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    IdPasseport: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    DatDerCon: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Activite: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Admin: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Srh: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Unite: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    SPMG: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    },
    Consult: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
    },
    CFA: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    }
  });
};
