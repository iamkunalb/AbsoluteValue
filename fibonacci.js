function fibonacci(x){
    result = [1];
    for (var i = 2; i < x; i++) {
        if (i == 2){
            result = [1,1];
        }else{
            result.push(result[i-3] + result[i-2]);
        }
    }
    return result;
  
};

console.log(fibonacci(10));