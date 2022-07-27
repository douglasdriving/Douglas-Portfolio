const header = document.createElement('header');
document.body.prepend(header);

const navbar = document.createElement('nav');
header.append(navbar);

const logo = document.createElement('h2');
logo.textContent = 'DD'
navbar.append(logo);

const pageTitle = document.createElement('h2');
pageTitle.textContent = 'Home'
navbar.append(pageTitle);

const dropDownIcon = document.createElement('h2');
dropDownIcon.textContent = 'Ham'
navbar.append(dropDownIcon);

const dropDownMenu = document.createElement('div');
dropDownMenu.id = 'dropDownMenu';
header.append(dropDownMenu);

//Create a menu item
createMenuItem('About');
createMenuItem('Projects');
createMenuItem('Contact');

function createMenuItem(text) {
  const menuItem = document.createElement('div');
  menuItem.className = 'dropDownMenuItem';
  const menuItemText = document.createElement('h2');
  menuItemText.textContent = text;
  menuItem.append(menuItemText);
  dropDownMenu.append(menuItem);
}
