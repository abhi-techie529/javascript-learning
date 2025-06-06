 // using object vlaues make a string


 const data1 = {
    name: "paris",
    populatin: "2,140,350",
    continent:"Europe"
 }
 
 const data2 = {
    name: "Tokyo",
    populatin: "5,500,550",
    continent:"Asia"
 }

 const cityFacts = (citydata) => {
    return `${citydata.name} has a population of ${citydata.populatin} and is situated in ${citydata.continent}`

 }
 console.log(cityFacts(data2));
 