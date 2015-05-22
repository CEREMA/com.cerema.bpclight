/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mpalolf', { 
    idMPALOLF: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    codeLOLF: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    libMission: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    libProgramme: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    libAction: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    libSousAction: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
};
