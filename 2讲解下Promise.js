function p1(){
  return Promise.resolve('hello')
}
function p2(){
   return p1().then(res=>{
     return res+'james';
   //Promise.reject('错误')
  })
}

p2().then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

function p3(){
  // setTimeout(function(){
  //   return Promise.resolve('hello')
  // },100)
  return Promise.resolve('hello') 
}

p3().then(res=>{
  console.log(res)
})