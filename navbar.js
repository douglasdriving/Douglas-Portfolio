const header = document.createElement('header');
document.body.prepend(header);

const navbar = document.createElement('nav');
header.append(navbar);

const logo = document.createElement('h2');
logo.textContent = 'DD'
navbar.append(logo);

const dropDownIcon = document.createElement('h2');
dropDownIcon.textContent = 'Ham';
dropDownIcon.id = 'dropDownIcon';
navbar.append(dropDownIcon);

const dropDownMenu = document.createElement('div');
dropDownMenu.id = 'dropDownMenu';
header.append(dropDownMenu);

dropDownIcon.onclick = () => {
  if (dropDownMenu.style.display === 'none' || !dropDownMenu.style.display) {
    dropDownMenu.style.display = 'block';
    dropDownIcon.style.background = '#b38b58';
    dropDownIcon.style.borderLeft = "4px solid black";
  }
  else {
    dropDownMenu.style.display = 'none';
    dropDownIcon.style.background = 'transparent';
    dropDownIcon.style.borderLeft = "0px solid transparent";
  }
}

logo.onclick = () => {
  if (window.location.pathname !== '/index.html') {
    window.location.pathname = '/index.html';
  }
}

//Create a menu item
createMenuItem('Home', '/index.html');
createMenuItem('About', '/about.html');
createMenuItem('Projects', '/projects.html');
createMenuItem('Contact', '/contact.html');

function createMenuItem(text, ref) {
  const menuItem = document.createElement('div');
  menuItem.className = 'dropDownMenuItem';
  const menuItemText = document.createElement('h2');
  menuItemText.textContent = text;
  menuItem.append(menuItemText);
  dropDownMenu.append(menuItem);
  menuItem.onclick = () => {
    window.location.pathname = ref;
  }
  if (window.location.pathname === ref) {
    menuItemText.style.textDecoration = 'underline';
  }
}
