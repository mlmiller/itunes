function(doc)
{
	if (doc.type=="album") {
		emit([doc._id, doc.type], null);
	}
	if (doc.type=="song") {
		emit([doc.parent_album, doc.type], doc.name);
	}

}