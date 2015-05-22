/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mels', { 
    Kmels: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Ksub: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    LibMelS: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
