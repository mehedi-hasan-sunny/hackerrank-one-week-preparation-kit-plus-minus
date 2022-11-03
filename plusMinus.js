function plusMinus(arr) {

    let proportion = {
        "positive" : 0, "negative" : 0, "zero" : 0
    }, length = arr.length;
    
    arr.forEach((val) => {
        if(val === 0){
            proportion.zero++;
        }
        else if(val < 0){
            proportion.negative++;
        }
        else{
            proportion.positive++;
        }
    })
    
    Object.keys(proportion).forEach((key)=>{
        console.log(parseFloat(proportion[key] / length).toPrecision(6))
    })
    
}
