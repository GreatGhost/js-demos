var timeId=null;
function setDate(){
  console.log('调试定时器');
  timeId=setInterval(function(){
    console.log('定时'+timeId)
  },5000)
}

function clearTime(){
  setTimeout(function(){
    clearInterval(timeId)
  },10000)
}

setDate()
clearTime()