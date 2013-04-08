function(doc) {
	for (var name in doc) {
		try {
			index(name, doc[name],{"store":"yes"});
		}
		catch(err){
			continue;
		}
	}
}
