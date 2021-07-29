
let main =document.getElementById("main");
let allData;

let getData = (search)=>{
  return new Promise((resolve,reject)=>{
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-06-26&sortBy=publishedAt&apiKey=16bce94d64464f04808b8eeb474d8e34`)
    .then(data =>data.json())
    .then (data =>{
     resolve(data) 
    })
  })
}

let setData = async()=>{
  let a = await getData("tesla");
  console.log(a)
}

setData()