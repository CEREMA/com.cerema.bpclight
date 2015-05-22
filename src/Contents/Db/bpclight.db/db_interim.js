/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_interim', { 
    PID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Agent: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Interim: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Final: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    D0: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    D1: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    VISA1: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    VISA2: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    VALID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    UID: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
