let gridSize = 10;
export let data = [];

for(let x=0;x<gridSize; x++) {
  data.push([])
  for(let y=0; y<gridSize;y++) {
    data[x].push({
      shown: false,
      flagged: false,
      x: x,
      y: y
    })
  }
}

data[0][0].crazy = true


export default data;
