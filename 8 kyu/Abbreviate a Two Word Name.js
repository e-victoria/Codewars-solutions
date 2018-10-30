function abbrevName(name) {

  var newName = name.split(' ');
	var initials = `${newName[0].charAt(0)}.${newName[1].charAt(0)}`;

  return initials.toUpperCase();

}
