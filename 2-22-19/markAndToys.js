let prices = [1,12,5,111,200,1000,10];
let prices2 = [1,2,3,4];

function maximumToys(prices,k){
    //Return an integer representing the maximum number of toys to purchase
    let amountSpent = 0;
    let toysBought = 0;
    let affordable = [];

    prices.forEach((price)=>{
        if(price <= k){
            affordable.push(price);
        }
    });

    affordable.sort((a,b) => a - b);

    for(let i=0; i<affordable.length; i++){
        //Can you move the array "array.length" times?
        if((amountSpent + affordable[i]) > k){
            break;
        } else{
            amountSpent += affordable[i];
            if(amountSpent <= k){
                toysBought++;
            }
        }
    }

    console.log(affordable);
    console.log(toysBought);
}

maximumToys(prices,50);
maximumToys(prices2,7);