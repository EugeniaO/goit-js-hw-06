const items = document.querySelectorAll(".item");

    console.log('Number of categories:', items.length)


items.forEach(item => {
    const itemTitle = item.firstElementChild.textContent;
    const sublistItemsQuantity = item.lastElementChild.children.length;

    console.log('Category:', itemTitle, '\nElements:', sublistItemsQuantity);
});
