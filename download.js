// this part is for the generation and download of the csv file itself!

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function downloadCsv() {
	text = document.getElementById("csv").value;
	download(document.getElementById("ws").value + '_result.csv', text);
}