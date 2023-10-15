function createPortfolioCard(
  parentElement,
  title,
  description,
  imageUrl,
  platforms,
  date,
  status,
  technologys
) {
  // Create the parent div element
  const portfolioCard = document.createElement("div");
  portfolioCard.classList.add("portfolio-item");

  // Create the image element
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = "";

  // Create the content div element
  const content = document.createElement("div");
  content.classList.add("content");

  // Create the title element
  const titleElement = document.createElement("h3");
  titleElement.classList.add("title", "line-clamp-2");
  titleElement.textContent = title;

  // create date
  const dateWraper = document.createElement("div");
  dateWraper.classList.add("date");

  const dateWrape = document.createElement("p");

  const span1 = document.createElement("span");
  var startDate = new Date(
    date.start.seconds * 1000 + date.start.nanoseconds / 1000000
  );
  var formattedStartDate = startDate.toLocaleDateString("in", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  span1.textContent = formattedStartDate;

  const span2 = document.createElement("span");
  var endDate = new Date(
    date.end.seconds * 1000 + date.end.nanoseconds / 1000000
  );
  var formattedEndDate = endDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  span2.textContent = status == "complete" ? formattedEndDate : "current";

  // Create the description element
  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("description", "line-clamp-3");
  descriptionElement.textContent = description;

  //create list technology
  const listTech = document.createElement("ul");
  listTech.classList.add("technology");
  technologys.forEach((technology) => {
    let techElement = document.createElement("li");
    techElement.classList.add("tech-item");
    techElement.textContent = technology;
    listTech.appendChild(techElement);
  });

  // Append child elements to their respective parents
  dateWrape.appendChild(span1);
  dateWrape.appendChild(document.createTextNode(" - "));
  dateWrape.appendChild(span2);
  dateWraper.appendChild(dateWrape);

  content.appendChild(titleElement);
  content.appendChild(dateWraper);
  content.appendChild(descriptionElement);
  content.appendChild(listTech);
  portfolioCard.appendChild(image);
  portfolioCard.appendChild(content);

  // Append the portfolio card to the parent element
  parentElement.appendChild(portfolioCard);
  return portfolioCard;
}

/**
 * Create a technology list item element.
 *
 * @param {Object} techObj - An object containing technology information.
 * @param {string} techObj.icon - The icon name for the technology.
 * @param {string} techObj.name - The label or name of the technology.
 * @returns {HTMLLIElement} - A list item element representing the technology.
 */
function createTechnologyItem(techObj) {
  //make list
  let li = document.createElement("li");
  li.classList.add('item-tech');

  //make iconify element
  let iconify_icon = document.createElement("iconify-icon");
  iconify_icon.setAttribute('icon',techObj.icon);
  iconify_icon.setAttribute('width',70);
  iconify_icon.setAttribute('height',70);

  //make label for the item
  let label = document.createElement('p');
  label.innerHTML = techObj.label

  //append to the parent
  li.appendChild(iconify_icon);
  li.appendChild(label);

  return li;
}
