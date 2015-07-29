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
	   unites.libUni Departement,
	   subdis.libSub Service,
	   etablissements.LibEts
FROM 
	agents
	join adresses on agents.kres = adresses.kadr
	join postal on adresses.kpos = postal.id
	join unites on unites.kuni = agents.kuni
	join subdis on subdis.ksub = agents.ksub
	join etablissements on etablissements.kets = unites.kets
WHERE
	agents.kage in ({kage})