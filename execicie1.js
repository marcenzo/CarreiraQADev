



const country = [`brasil`, `france`,`Eua`, `spanish`, `italy`]
country.push('Norway')
country.push('british')
   for(let i = 0; i < country.length; i++){
    let index = i;
    console.log('--------------------------------------------------------')
    const uppercased = country.map(name => name.toUpperCase());
   console.log('Nome ='.toUpperCase(),uppercased[i]);
   let word = ('the value of index the!'.toUpperCase())
   console.log(word , index +1);


}

