/*
	Example document from itunes1 database.
	Fully denomrlized (itunes basic)
*/
denomralized = {
   "_id": "dcfaf239729a172799859b0c76b52682",
   "total_time": "277546",
   "compilation": false,
   "play_count": 24,
   "bit_rate": 256,
   "composer": "Diplo",
   "year": 2012,
   "genre": "Dance",
   "date_added": 1339608758,
   "album_artist": "Diplo",
   "size": 9990340,
   "album": "Express Yourself - EP",
   "kind": "Purchased AAC audio file",
   "name": "Express Yourself (feat. Nicky Da B)",
   "artist": "Diplo",
   "date_modified": 1339608764,
   "comments": null,
   "track_number": "1",
   "sample_rate": 44100,
   "location": "file://localhost/Users/mlmiller/Music/iTunes/iTunes%20Media/Music/Diplo/Express%20Yourself%20-%20EP/01%20Express%20Yourself%20(feat.%20Nicky%20Da%20B).m4a"
}

/*
	Example document from itunes2 database.
	"Fat" (aka MongoDB style)
*/
fat_normalized = {
   "_id": "ExpressYourselfEP_Diplo",
   "_rev": "1-e8d79aaeeb30516c0a112df26a8eb4e1",
   "songs": [
       {
           "total_time": "277546",
           "parent_album": "ExpressYourselfEP_Diplo",
           "kind": "Purchased AAC audio file",
           "name": "Express Yourself (feat. Nicky Da B)",
           "date_modified": 1339608764,
           "compilation": false,
           "artist": "Diplo",
           "comments": null,
           "track_number": "1",
           "play_count": 24,
           "bit_rate": 256,
           "sample_rate": 44100,
           "location": "file://localhost/Users/mlmiller/Music/iTunes/iTunes%20Media/Music/Diplo/Express%20Yourself%20-%20EP/01%20Express%20Yourself%20(feat.%20Nicky%20Da%20B).m4a",
           "composer": "Diplo",
           "year": 2012,
           "genre": "Dance",
           "date_added": 1339608758,
           "size": 9990340
       },
       {
           "total_time": "240000",
           "parent_album": "ExpressYourselfEP_Diplo",
           "kind": "Purchased AAC audio file",
           "name": "Set It Off (feat Lazerdisk Party Sex)",
           "date_modified": 1339608771,
           "compilation": false,
           "artist": "Diplo",
           "comments": null,
           "track_number": "6",
           "play_count": 13,
           "bit_rate": 256,
           "sample_rate": 44100,
           "location": "file://localhost/Users/mlmiller/Music/iTunes/iTunes%20Media/Music/Diplo/Express%20Yourself%20-%20EP/06%20Set%20It%20Off%20(feat%20Lazerdisk%20Party%20Sex).m4a",
           "composer": "Diplo &#38; Lazerdisk Party Sex",
           "year": 2012,
           "genre": "Dance",
           "date_added": 1339608758,
           "size": 8608086
       },
       {
           "total_time": "282545",
           "parent_album": "ExpressYourselfEP_Diplo",
           "kind": "Purchased AAC audio file",
           "name": "Barely Standing (feat. Datsik &#38; Sabi)",
           "date_modified": 1339608764,
           "compilation": false,
           "artist": "Diplo",
           "comments": null,
           "track_number": "2",
           "play_count": 20,
           "bit_rate": 256,
           "sample_rate": 44100,
           "location": "file://localhost/Users/mlmiller/Music/iTunes/iTunes%20Media/Music/Diplo/Express%20Yourself%20-%20EP/02%20Barely%20Standing%20(feat.%20Datsik%20&#38;%20Sabi).m4a",
           "composer": "Diplo &#38; Datsik",
           "year": 2012,
           "genre": "Dance",
           "date_added": 1339608758,
           "size": 9879323
       },
       {
           "total_time": "218868",
           "parent_album": "ExpressYourselfEP_Diplo",
           "kind": "Purchased AAC audio file",
           "name": "No Problem (feat. Flinch &#38; My Name Is Kay)",
           "date_modified": 1339608763,
           "compilation": false,
           "artist": "Diplo",
           "comments": null,
           "track_number": "3",
           "play_count": 16,
           "bit_rate": 256,
           "sample_rate": 44100,
           "location": "file://localhost/Users/mlmiller/Music/iTunes/iTunes%20Media/Music/Diplo/Express%20Yourself%20-%20EP/03%20No%20Problem%20(feat.%20Flinch%20&#38;%20My%20Name%20Is%20Kay).m4a",
           "composer": "Diplo &#38; Flinch",
           "year": 2012,
           "genre": "Dance",
           "date_added": 1339608758,
           "size": 8132318
       },
       {
           "total_time": "194187",
           "parent_album": "ExpressYourselfEP_Diplo",
           "kind": "Purchased AAC audio file",
           "name": "4. Move Around (feat. Elephant Man &#38; GTA)",
           "date_modified": 1339608767,
           "compilation": false,
           "artist": "Diplo",
           "comments": null,
           "track_number": "4",
           "play_count": 14,
           "bit_rate": 256,
           "sample_rate": 44100,
           "location": "file://localhost/Users/mlmiller/Music/iTunes/iTunes%20Media/Music/Diplo/Express%20Yourself%20-%20EP/04%204.%20Move%20Around%20(feat.%20Elephant%20Man%20&#38;%20GTA).m4a",
           "composer": "Diplo &#38; GTA",
           "year": 2012,
           "genre": "Dance",
           "date_added": 1339608758,
           "size": 6982603
       },
       {
           "total_time": "266666",
           "parent_album": "ExpressYourselfEP_Diplo",
           "kind": "Purchased AAC audio file",
           "name": "Butters Theme (feat. Billy the Gent &#38; Long Jawns)",
           "date_modified": 1339608770,
           "compilation": false,
           "artist": "Diplo",
           "comments": null,
           "track_number": "5",
           "play_count": 13,
           "bit_rate": 256,
           "sample_rate": 44100,
           "location": "file://localhost/Users/mlmiller/Music/iTunes/iTunes%20Media/Music/Diplo/Express%20Yourself%20-%20EP/05%20Butters%20Theme%20(feat.%20Billy%20the%20Gent%20&#38;%20Long%20Jawns).m4a",
           "composer": "Diplo, Billy the Gent &#38; Long Jawns",
           "year": 2012,
           "genre": "Dance",
           "date_added": 1339608758,
           "size": 9956710
       }
   ]
}


/*
	Example documents from itunes3 database.
	Skinny documents linked by foreign keys.
*/
album = {
   "_id": "album:ExpressYourselfEP_Diplo",
   "_rev": "1-9c618e9360d8670f952335e68526e07b",
   "type": "album"
}

song = {
   "_id": "song:ExpressYourselffeatNickyDaB",
   "_rev": "1-10ddffb60076e35a6598bc4f90ac231a",
   "parent_album": "album:ExpressYourselfEP_Diplo",
   "total_time": "277546",
   "compilation": false,
   "play_count": 24,
   "bit_rate": 256,
   "composer": "Diplo",
   "year": 2012,
   "genre": "Dance",
   "date_added": 1339608758,
   "size": 9990340,
   "kind": "Purchased AAC audio file",
   "name": "Express Yourself (feat. Nicky Da B)",
   "artist": "Diplo",
   "date_modified": 1339608764,
   "comments": null,
   "track_number": "1",
   "sample_rate": 44100,
   "location": "file://localhost/Users/mlmiller/Music/iTunes/iTunes%20Media/Music/Diplo/Express%20Yourself%20-%20EP/01%20Express%20Yourself%20(feat.%20Nicky%20Da%20B).m4a",
   "type": "song"
}
