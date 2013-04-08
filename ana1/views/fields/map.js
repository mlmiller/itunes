function(doc) {
	for (var name in doc) {
		try {
			emit(name, doc[name]);
		}
		catch(err){
			continue;
		}
	}
}
