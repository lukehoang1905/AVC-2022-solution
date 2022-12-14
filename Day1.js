// Part 1

const inputString=document.getElementsByTagName("pre")[0].innerHTML
const inputArray=inputString.split("\n\n")

const totalArray=inputArray.map((e) => {
  const newE = e
    .split("\n")
    .reduce((sub, f) => sub + (parseInt(f) ? parseInt(f) : 0), 0);
  if (newE > max) max = newE;
  return newE;
});


// Part 2
const sortedArray=totalArray.sort((a, b) => b - a)
const top3Total=sortedArray[0] + sortedArray[1] + sortedArray[2]
