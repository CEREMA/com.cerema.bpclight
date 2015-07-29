SELECT agents.Nom,
       agents.Prenom,
	   DATE_FORMAT(agents.DatNai,'%d/%m/%Y'),
	   agents.Telephone,
	   agents.Portable,
	   agents.VilNai VilleNaissance,
	   agents.DepNai DeptNaissance,
	   agents.PaysNai PaysNaissance,
	   adresses.Adresse,
	   postal.code CodePostal,
	   postal.ville Ville,
	   etablissements.LibEts,
	   unites.libUni Departement,
	   subdis.libSub Service
FROM 
	agents
	left join adresses on agents.kres = adresses.kadr
	left join postal on adresses.kpos = postal.id
	left join unites on unites.kuni = agents.kuni
	left join subdis on subdis.ksub = agents.ksub
	left join etablissements on etablissements.kets = unites.kets
WHERE
	agents.kage in ({kage})