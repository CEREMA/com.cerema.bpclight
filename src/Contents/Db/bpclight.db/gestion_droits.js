/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gestion_droits', { 
    Kdts: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    DtValid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    DtConsultation: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  });
};
