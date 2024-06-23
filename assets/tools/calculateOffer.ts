export default function calculateOffer(price:number , newPrice:number){
 return (1-((price-newPrice)/price))*100
}