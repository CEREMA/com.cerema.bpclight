/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agents', { 
    Kage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    Kuni: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Ksub: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kser: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kbat: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kgra: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kbur: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Kres: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Ksec: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Ksec2: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Keta: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Nom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Prenom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Matri: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DatCre: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatOuv: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatMod: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatClo: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    HorSect: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CodHie: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    CodHor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LibHor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Telephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Poste: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Fax: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Portable: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Bureau: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RoleDeta: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    DatMaj: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DatNai: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    VilNai: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DepNai: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NomPre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Actif: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    IneTP: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    HSLabo: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
    },
    MissioLabo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    LogUse: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NumImmo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    INSEE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Circe: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    PaysNai: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Signat: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Temptation: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    Verrou: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NumautCond: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Autorise: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    INM: {
      type: 'CHAR(5)',
      allowNull: true,
    },
    AgGesper: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AgRe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AgRisques: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    REHUCIT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    libelle_poste: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dossier_d: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    dossier_r: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    libelle_doc: {
      type: 'LONGBLOB',
      allowNull: false,
    }
  });
};
