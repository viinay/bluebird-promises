# bluebird-promises

var Promise = require('bluebird')

function caller (bool){
    if(bool){
        return 'OKK'
    }else{
       throw 'Not OK'
    }
}

var PromiseCaller = new Promise.method(caller)

PromiseCaller(true)
  .then(function(status){
      console.log(status)
  })
  .catch(function(error){
      console.log(error)
  })
