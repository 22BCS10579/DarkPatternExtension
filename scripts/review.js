function injectStyle(css) {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
  
  const styles = `
  .open-review-portal  {
    border: 2px solid blue;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  .open-review-portal *{
    font-family: sans-serif;
  }

  .open-review-portal .flex{
    display: flex;
  }

  .open-review-portal .flex-col{
    flex-direction: column;
  }

  .open-review-portal .justify-between{
    justify-content: space-between;
  }

  .open-review-portal ul{
    list-style: none;
    padding: 0;
    padding-right: 20px;
  }

  .open-review-portal .add-review-btn{
    background-color: #fcba03;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

  .open-review-portal h5{
    color: green;
  }

  .open-review-portal .items-center{
    align-items: center;
  }

  .open-review-portal .reviews{
    padding-top: 10px;
    gap: 5px;
    display: flex;
    flex-direction: column;
  }

  .open-review-portal .reviews li{
    border: 2px solid #b3b3b3;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
  }

  .open-review-portal .review-date{
    color: blue;
  }

  .open-review-portal li{
    list-style: none !important;
    padding: 2px;
  }
  
  `;
  
  injectStyle(styles);



// HTML content to be injected
const htmlToInject = `
<div class="open-review-portal border-2 border-slate-300 p-3 rounded-lg shadow-lg">
<h3 class="text-2xl">🛒 Open Ecommerce review Portal</h3>
<div class="flex justify-between">
  <h5 class="text-green-600"> 36 reviews posted </h5>
  <button class="add-review-btn">Add a review</button>
</div>

<ul class="reviews flex flex-col">
  <li>
    <p>
      After using this product for a few weeks, I have mixed feelings. On the positive side, it has some fantastic features that enhance my experience. However, I've encountered a couple of issues that are a bit frustrating. It's not perfect, but it gets the job done. </p>
    <label class="review-date">20 Jan, 2024</label>
  </li> 

  <li>
    <p>
      Initially, I was excited about this product, but I've been disappointed with its durability. It started showing signs of wear and tear sooner than expected. While it has some good features, I expected it to last longer. A bit disappointed.</p>
    <label class="review-date">17 Jan, 2024</label>
  </li> 

  <li>
    <p>
      The design of this product is sleek, and it looks great. However, there are some areas where it could be improved. The user interface is a bit clunky, and I've had a couple of minor issues. Overall, it's decent, but there's room for improvement.</p>
    <label class="review-date">11 Feb, 2023</label>
  </li> 
</ul>

</div>
`;

// Find the target element by ID and append the injected HTML
const targetElement = document.getElementById('customer-reviews_feature_div');
if (targetElement) {
targetElement.insertAdjacentHTML('beforebegin', htmlToInject);
}

  
  