/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('photo', { 
    PID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    MATRI: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PHOTO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    },
    LOCK: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
