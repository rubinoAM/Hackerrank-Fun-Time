let prices = [1,12,5,111,200,1000,10];
let prices2 = [1,2,3,4];

function maximumToys(prices,budget){
    //Return an integer representing the maximum number of toys to purchase
    let amountSpent = 0;
    let toysBought = 0;
    let affordable = [];

    prices.forEach(function(price){
        if(price < budget){
            affordable.push(price);
        }
    });

    for(let i=0; i<affordable.length; i++){
        //Can you move the array "array.length" times?
        if((amountSpent + affordable[i]) > budget){
            break;
        } else{
            amountSpent += affordable[i];
            toysBought++;
        }
    }

    console.log(affordable);
    console.log(toysBought);
}

maximumToys(prices,50);
maximumToys(prices2,7);