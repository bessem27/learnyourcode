const http = require('http')
var urlOne = process.argv[2]
var urlTwo = process.argv[3]
var urlThree= process.argv[4]
var one=""
var two=""
var three=""
http.get(urlOne, function (response) {
    response.setEncoding("utf8") 
    response.on("data",function(data){
        one = one + data
    })
    response.on("end",function(data){
        console.log(one)
http.get(urlTwo, function (response) {
    response.setEncoding("utf8") 
    response.on("data",function(data){
        two = two + data
     })
    response.on("end",function(data){
        console.log(two)
http.get(urlThree, function (response) {
    response.setEncoding("utf8") 
    response.on("data",function(data){
        three = three + data
    })
    response.on("end",function(data){
    console.log(three)
    })
} )
    })
})
    })
})    