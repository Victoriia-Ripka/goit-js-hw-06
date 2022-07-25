const countOfItems = document.querySelectorAll('.item').length;
console.log("Number of categories:", countOfItems);

const arrayOfItems = document.querySelectorAll('.item');

const exTwo = arrayOfItems.forEach(element => {
    const title = element.querySelector('h2').textContent;
    const count = element.querySelectorAll('li').length;
    console.log("Category:", title);
    console.log("Elements:", count);
})