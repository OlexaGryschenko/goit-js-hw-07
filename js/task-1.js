const categoryItems = document.querySelectorAll('#categories > .item');

console.log(`Number of categories: ${categoryItems.length}`);



categoryItems.forEach(item => {
    const categoryName = item.querySelector("h2").innerText;
    const elementCount = item.querySelectorAll("li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementCount}`);
});

