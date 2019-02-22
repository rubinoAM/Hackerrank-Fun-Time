let prices = [1,12,5,111,200,1000,10];

function maximumToys(prices,budget){
    //Return an integer representing the maximum number of toys to purchase
    let amountSpent = 0;
    let affordable = [];

    prices.forEach(function(price){
        if(price < budget){
            affordable.push(price);
        }
    });

    console.log(affordable);
}

maximumToys(prices,50);