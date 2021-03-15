
//案例一
async function getName1(){
    await getStr1();
    await getStr2();
    getName3();
}

function getStr1(){
  console.log('getStr1');
  return Promise.resolve('hello');
}
function getStr2(){
  console.log('getStr2');
  return Promise.resolve('hello2')
}

function getName2(){
  console.log('获取姓名2')
}

function getName3(){
  console.log('获取姓名3');
}

getName1();
getName2();

//案例二

function getData(){
  return Promise.resolve([
    {name:'王菲'},
    {name:"松江"}
  ])
}

function getList(){
  return Promise.resolve([
    {name:'王菲41234'},
    {name:"松江1432"}
  ])
}
function print(){
  console.log('测试内容')
}
async function formatData(){
  console.log('此处是formatData');
  const data=await getData();
  const list=await getList();
  console.log(data);
  console.log(list);
  
}

formatData();
print();


// 手写原生异步