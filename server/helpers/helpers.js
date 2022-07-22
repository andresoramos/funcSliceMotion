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

const artificialDelayFromSendingListToApi = async (time) =>{
  return new Promise(async(resolve)=>{
    return setTimeout(()=>{
        resolve(true);
    }, time * 1000)
  })
}



module.exports = {getNumber, createPoint, artificialDelayFromSendingListToApi}