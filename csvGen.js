fields = ['nome', 'workshop', 'dia', 'mes', 'ano', 'hora', 'entidade', 'motivo', 'formador']

function firstLine() {
	var fLine = '';
	for (var i = 0; i < fields.length; i++) {
		fLine += fields[i] + ',';
	}
	return fLine.substring(0, fLine.length - 1) + "\n";
}

function getNames() {
	var namesInput = document.getElementById("names").value;

	names = namesInput.match(/[^\r\n]+/g);

	return names;
}

function line(name) {

	ws = document.getElementById("ws").value;
	day = document.getElementById("day").value;
	month = document.getElementById("month").value;
	year = document.getElementById("year").value;
	duration = document.getElementById("duration").value;
	entity = document.getElementById("entity").value;
	motive = document.getElementById("motive").value;
	lecturer = document.getElementById("lecturer").value;

	answer = name + "," + '"' + ws + '"' + "," + day + "," + month + "," + year + "," + duration + "," + entity + "," + '"' + motive + '"' + "," + lecturer +"\n";

	return answer;
}

function lines(names) {
	var ans = "";
	for (var i = 0; i < names.length; i++) {
		ans += line(names[i]);
	}

	return ans;
}

function gen() {
	names = getNames();

	var csvString = firstLine();
	csvString += lines(names);

	document.getElementById("output").value = csvString;

	document.getElementById("downloadButton").style.display = "block";
}
