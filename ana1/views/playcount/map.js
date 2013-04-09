function(doc)
{
	if (doc.play_count) {
		emit(doc.play_count,null);
	}
}
