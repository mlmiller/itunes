function(doc)
{
	if (doc.album && doc.artist) {
		emit( [doc.artist, doc.album], null);
	}
}
