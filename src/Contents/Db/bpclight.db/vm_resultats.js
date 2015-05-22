/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vm_resultats', { 
    kvm_resultats: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    resultat: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
