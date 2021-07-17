//converting object to map
let obj={
    id:'1',
    name:'josh',
    phno:123
}
let newarr=Object.entries(obj)
let map=new Map(newarr)
console.log(map)
//converting map to object
let map1=new Map([['a',1],['b',2],['c',3]])
let a=map1.entries()
let newob=Object.fromEntries(a)
console.log(map1)
console.log(newob)
//performance analysis of map and object
console.time('Object')
for(const key in obj){
    if(`${key}`=='id')
    console.log(`${obj[key]}`)
    //console.log(`${key}:${obj[key]}`)
}
console.timeEnd('Object')
console.time('Map')
map.forEach((value,key)=>{
    if(key=='id')
    console.log(value)

})
console.timeEnd('Map')