// list which resources you want to track

trackedValues = ["resource1", "resource2", "resource3", "unit", "tickerUpgrades"]



record = []
recordingClock = null;
time = 0;
// call this function to start
startRecording = function (gameObject, valuesArray=trackedValues, seconds=5){ // seconds is how long between snapshots 
record = []
time = 0;
  header = "Seconds, "
  for (x in valuesArray) {header += valuesArray[x] + ", "};
  record.push(header);
  recordingClock = setInterval(function(){
      entry = time + ", "
      time++;
      for (x in valuesArray) {entry += gameObject[valuesArray[x]] + ", "};
      record.push(entry)
      console.log(entry)
  }, seconds*1000)



}
// call this function to stop
function stopRecording(){
  clearInterval(recordingClock);
  let output = ""
  for (x in record) {output += record[x] + ";\n"} 
  download("game_data_" + time + ".csv", output);
  
}

//text generator

//https://stackoverflow.com/questions/45831191/generate-and-download-file-from-js
function download(filename, text) {

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
