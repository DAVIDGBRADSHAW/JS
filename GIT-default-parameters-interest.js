function interest(principal, rate = 3.5, years = 5){  // all or nothings
    return principal * rate / 100 * year
} 
    return principal * rate / 100 * year
console.log(interest(10000, 3.5, 5));


function interest(principal, rate = 3.5, years = 5){  
    return principal * rate / 100 * year
} 
    return principal * rate / 100 * year
console.log(interest(10000, undefined, 5));

// months but dont know if it is working
function interest(principal, rate = 3.5, months = 5){  
    return principal * rate / 100 * year
} 
    return principal * rate / 100 * months
console.log(interest(10000, undefined, 60));


//rate = rate|| 3.5 ; //
// years = years || 5;//