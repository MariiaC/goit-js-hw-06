const liCountRef = document.querySelectorAll('.item');
console.log('Number of categories:', liCountRef.length);

const titleRef = document.querySelectorAll('.item');
for (const item of titleRef) {
    console.log('Category:', item.firstElementChild.textContent);
   console.log('Elements:', item.children[1].children.length);
}

