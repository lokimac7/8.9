function rysujChoinke(parametr) {
	for(var i = 0; i <= parametr; i++) {
		var star = '';
		for(j = 0; j < (i * 2 - 1); j++) {
			var star = star + '*';
		}
		console.log(star);
	}
}

rysujChoinke(5);

