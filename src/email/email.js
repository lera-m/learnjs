
function validateEmail(email) {
	if (email.indexOf(' ') != -1) {
		return 'no_space_in_an_email';
	}

	var splitted = email.split('@');

	if (splitted.length !== 2) {
		return 'email_has_not_exact_one_@';
	}

	var beforeAt = splitted[0]; 
	var afterAt = splitted[1];

	// проверка перед @
	if (beforeAt == "") {
		return 'no_characters_before_@';
	}

	splitted = beforeAt.split('.');

	if (splitted.indexOf('') != -1) {
		return 'wrong_dot_position_before_@';
	}
	
	var i;
	for (i = 0; i < splitted.length; i++) {
		if (!splitted[i].match(/^[a-z0-9\-_]*$/i)) {
			return 'only_letters,_numbers,underscore_and_dash_are_allowed_before_@';
		}
	}

    // проверка после @
    if (afterAt == "") {
		return 'no_characters_after_@';
	} 

    splitted = afterAt.split('.');

	if (splitted.indexOf('') != -1) {
		return 'wrong_dot_position_after_@';
	}

	if (splitted.length < 2) {
		return 'no_dot_after_@';
	}
    
    if (splitted[splitted.length - 1].length < 2) {
    	return 'domain_ending_needs_minimum_2_characters';
    }

    if (!splitted[splitted.length - 1].match(/^[a-z]*$/i)) {
        return 'only_letters_in_domain_ending_are_allowed';
    }

	for (i = 0; i < splitted.length-1; i++) {
		if (!splitted[i].match(/^[a-z0-9\-]*$/i)) {
			return 'only_letters,_numbers_and_dash_are_allowed_in_domain_name';
		}
	}

	return true;
}

console.log('test@dom@ain.de', validateEmail('test@dom@ain.de'));
console.log('test@de', validateEmail('test@de'));
console.log('@domain.de', validateEmail('@domain.de'));
console.log('test@', validateEmail('test@'));
console.log('test@.domain.de', validateEmail('test@.domain.de'));
console.log('test@domain.d-e', validateEmail('test@domain.d-e'));
console.log('test@d*omain.de', validateEmail('test@d*omain.de'));
console.log('test.@domain.de', validateEmail('test.@domain.de'));
console.log('hello..test@domain.de', validateEmail('hello..test@domain.de'));
console.log('.test@domain.de', validateEmail('.test@domain.de'));
console.log('test?@domain.de', validateEmail('test?@domain.de'));
console.log('test@domain.e', validateEmail('test@domain.e'));
console.log('test@domain.de', validateEmail('test@domain.de'));