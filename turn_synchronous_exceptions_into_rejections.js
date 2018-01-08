var Promise = require('bluebird')

function caller(bool){
    return new Promise.try(function(){
        if(bool){
            return 'OK'
        }else{
            throw 'Not Ok'
        }
    })
}

caller(true)
    .then(function(status){
        console.log(status)
    })
    .catch(function(error){
        console.log(error)
    })
