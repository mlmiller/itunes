// special values sort before all other types
null
false
true

// then numbers
1
2
3.0
4

// then text, case sensitive
"a"
"A"
"aa"
"b"
"B"
"ba"
"bb"

// then arrays. compared element by element until different.
// Longer arrays sort after their prefixes
["a"]
["b"]
["b","c"]
["b","c", "a"]
["b","d"]
["b","d", "e"]

// then object, compares each key value in the list until different.
// larger objects sort after their subset objects.
{a:1}
{a:2}
{b:1}
{b:2}
{b:2, a:1} // Member order does matter for collation.
           // CouchDB preserves member order
           // but doesn't require that clients will.
           // this test might fail if used with a js engine
           // that doesn't preserve order
{b:2, c:2}


