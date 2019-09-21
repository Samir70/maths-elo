const transformRating = (rating) => 10**(rating/400);

// in this, the result is from the point of view of player 1 (human) 
// who answered question with difficulty of rating2
// howProvisional will be in [1, 10]
// if the humans rating is very provisional (ie: 10) then rating1 changes by more
// but the question's rating changes by little
const NewRatings = (rating1, rating2, result, howProvisional) => {
    var r1=transformRating(rating1), r2 = transformRating(rating2);
    // expected result for each player
    var ratingSum = r1+r2;
    var e1=r1/ratingSum, e2=r2/ratingSum;
    // console.log('r1, e1', r1, e1)

    var newR1 = rating1 + 32*howProvisional*(result - e1),
        newR2 = rating2 + (32/howProvisional)*(1-result - e2);
    
    return [Math.floor(newR1), Math.floor(newR2)]
}

export default NewRatings;