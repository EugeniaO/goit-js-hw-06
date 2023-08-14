const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function render() {
const listEl = document.querySelector(".gallery");

  
  const cards = images.map(item => `<li style="display:'flex';"><img src=${item.url} alt=${item.alt} width=200px/> 
  </li >`

  ).join("");
  listEl.style.listStyle = "none";
  listEl.style.display = "flex";
  listEl.style.flexDirection = "row";
  listEl.style.gap = "15px";

  listEl.insertAdjacentHTML("afterbegin", cards);
}



// galleryEl.insertAdjacentElement


render();