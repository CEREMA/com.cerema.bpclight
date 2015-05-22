/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feries', { 
    Kfer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    DateFerie: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    LibFerie: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RTT: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
