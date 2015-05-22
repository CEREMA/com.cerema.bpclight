/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('param', { 
    Kpar: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    SauvSource: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ImagesCS: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ImagesWeb: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    PhotosCS: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    PhotoWeb: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    TSource: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TUser: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TBDD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TPasse: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TProprio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TAcces: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TServer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RSource: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RUser: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RBDD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RPasse: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RProprio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RAcces: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RServer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Verrou: {
      type: 'TINYBLOB',
      allowNull: true,
    }
  });
};
