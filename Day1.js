const inputString=document.getElementsByTagName("pre")[0].innerHTML
const inputArray=inputString.split("\n\n")

inputArray.map((e) => {
  const newE = e
    .split("\n")
    .reduce((sub, f) => sub + (parseInt(f) ? parseInt(f) : 0), 0);
  if (newE > max) max = newE;
  return newE;
});
