/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vm_natures', { 
    kvm_natures: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    nature: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
