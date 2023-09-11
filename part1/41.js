// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let {famousSong:song,bandName,...restProps} = band;
console.log(bandName)
console.log(song)
console.log(restProps);
