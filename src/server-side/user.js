'use strict';

var users = {
		lera: {
			name: "Lera M",
			age: 20
		},
		daniel: {
			name: "Daniel M",
			age: 25
		}
	};

module.exports = function (userId) {

	// Return list of existing users if no userId is provided
    if (!userId) {
    	var key;
    	var user;
    	var username;
    	var list = "";

    	// Loop on users object to get userId as key
		for (key in users) {
			user = users[key]; // Get user object by key (userId)
			username = user.name; // Get username from user object

			list = list + '<li> <a href="/'+ key +'">' +  username + '</a> </li>';
	    }

		return (
			'<html>' + 
	    	'<head>' + 
	    		'<title>List</title>' + 
	    	'</head>' +
	    	'<body>' + 
	    		'<ul>' + list + '</ul>' +
	    	'</body>' + 
	    	'</html>'
    	);
	}

	// Return error page if user does not exist
	var user = users[userId]; // Get user object from users object by userId
	if (!user) {
		return (
			'<html>' + 
	    	'<head>' + 
	    		'<title>Error</title>' + 
	    	'</head>' +
	    	'<body>' + 
	    		'<h1>' + 'Username "' + userId + '" does not exist' + '</h1>' +
	    	'</body>' + 
	    	'</html>'
    	);
	}

	// Return user's information
    return (
    	'<html>' + 
    	'<head>' + 
    		'<title>User page</title>' + 
    	'</head>' +
    	'<body>' + 
    		'<h1 style = color:red>' + user.name + '</h1>' +
    		'<p>age: ' + user.age + '</p>' +
    	'</body>' + 
    	'</html>'
    );

};
