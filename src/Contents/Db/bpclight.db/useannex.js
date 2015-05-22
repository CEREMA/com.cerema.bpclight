/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('useannex', { 
    Kuseann: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kuse: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kann: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
