function(doc)
{
	if (doc.artist && doc.album && doc.play_count) {
		emit([doc.artist, doc.album], parseInt(doc.play_count) );
	}
}
