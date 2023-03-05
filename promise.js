const getData = new Promise(function(resolve, reject) {
   resolve(1020);

});
// console.log(getData);

getData.then(data => {
   console.log(data + 10);
});

