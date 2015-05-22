/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('droit_consult', { 
    KConsult: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    CodeConsult: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    LibConsultC: {
      type: 'CHAR(50)',
      allowNull: true,
    },
    LibConsult: {
      type: 'CHAR(50)',
      allowNull: true,
    }
  });
};
