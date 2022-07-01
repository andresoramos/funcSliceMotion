const minMax = {min: 0, max: 20}
const getNumber = ({min, max}) =>{
  return Math.floor(Math.random() * (max - min) + min);
};
const createPoint = () =>{
  const returnObj = {x: getNumber(minMax), y: getNumber(minMax), z: getNumber(minMax)};
  for(let key in returnObj){
      if(returnObj[key] === 2){
          return false;
      }
      // return false;
  }
  return returnObj;
};



module.exports = {getNumber, createPoint}