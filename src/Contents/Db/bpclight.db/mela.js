/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mela', { 
    Kmela: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibMelA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
