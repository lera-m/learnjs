
var usersObject = {
		'lera': {
			name: "Lera Mandro",
			age: 20,
			details: [
				'likes to do nothing',
				'likes sleeping',
				{
					'programming': ['html', 'css', 'javascript'],
					'work': 'accounter'
				}
			]
		}, 
		'daniel': {
			name: "Daniel Mayer",
			age: 25,
			details: []
		}
	};

var a = usersObject['lera'];
/*
		{
			name: "Lera Mandro",
			age: 20,
			details: [
				'likes to do nothing',
				'likes sleeping',
				{
					'programming': ['html', 'css', 'javascript'],
					'work': 'accounter'
				}
			]
		}
*/

var b = a.name;
/*
				  "Lera Mandro"
*/

var b = a['name'];
/*
				  "Lera Mandro"
*/

var b = a["name"];
/*
				  "Lera Mandro"
*/

var key = 'name';
var b = a[key];
/*
				  "Lera Mandro"
*/

var c = a.details;
/*
			[
				'likes to do nothing',
				'likes sleeping',
				{
					'programming': ['html', 'css', 'javascript'],
					'work': 'accounter'
				}
			]
*/

var d = c[0];
/*
				'likes to do nothing'
*/

var e = c[2];
/*
				{
					'programming': ['html', 'css', 'javascript'],
					'work': 'accounter'
				}
*/

var f = e.programming;
/*
									['html', 'css', 'javascript']
*/

var g = f[1];
/*
					                         'css'
*/