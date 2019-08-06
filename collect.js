const http = require('http')
var allData= ""

http.get(process.argv[2], function (response) {
  response.setEncoding("utf8") 
  response.on("data",function(data){
      allData = allData + data
  })
  response.on("end",function(data){
    allData = allData + data

    
    console.log(allData.length)
    console.log(allData)
  })
})