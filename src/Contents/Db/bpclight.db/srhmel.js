/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('srhmel', { 
    Ksrh: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Melanie: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    SRHVac: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    SRH: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
