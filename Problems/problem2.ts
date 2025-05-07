type Product = { title: string; rating: number };

const filterByRating = (items: Product[]): Product[] => {
    const higherRatings = items.filter(item => item.rating >= 4)
    return higherRatings
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 2.5 },
];

console.log(filterByRating(books))
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]