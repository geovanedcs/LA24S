export function navbarComponent() {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar', 'navbar-expand-lg');
  navbar.style.backgroundColor = '#FF3C38';

  const container = document.createElement('div');
  container.classList.add('container-fluid');

  const button = document.createElement('button');
  button.classList.add('navbar-toggler');
  button.type = 'button';
  button.dataset.mdbToggle = 'collapse';
  button.dataset.mdbTarget = '#navbarSupportedContent';
  button.setAttribute('aria-controls', 'navbarSupportedContent');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Toggle navigation');

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-bars');
  button.appendChild(icon);

  const div = document.createElement('div');
  div.classList.add('collapse', 'navbar-collapse');
  div.id = 'navbarSupportedContent';

  const a = document.createElement('a');
  a.classList.add('navbar-brand', 'mt-2', 'mt-lg-0');
  a.href = 'index.html';

  const img = document.createElement('img');
  img.src = './img/My_Pet-removebg-preview.png';
  img.width = '150';
  img.alt = 'My Pet Space';
  img.loading = 'lazy';
  a.appendChild(img);

  const ul = document.createElement('ul');
  ul.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0');

  const li1 = document.createElement('li');
  li1.classList.add('nav-item');

  const a1 = document.createElement('a');
  a1.classList.add('nav-link');
  a1.href = 'index.html';
  a1.textContent = 'Home';
  li1.appendChild(a1);

  const li2 = document.createElement('li');
  li2.classList.add('nav-item');

  const a2 = document.createElement('a');
  a2.classList.add('nav-link');
  a2.href = '#';
  a2.textContent = 'Team';
  li2.appendChild(a2);
  
  ul.appendChild(li1);
  ul.appendChild(li2);

  const div2 = document.createElement('div');
  div2.classList.add('d-flex', 'align-items-center');

  const a4 = document.createElement('a');
  a4.classList.add('link-secondary', 'me-3');
  a4.href = 'cart.html';

  const icon2 = document.createElement('i');
  icon2.classList.add('fas', 'fa-shopping-cart');

  const span2 = document.createElement('span');
  span2.classList.add('badge', 'rounded-pill', 'badge-notification', 'bg-danger');
  if(localStorage.getItem('shoppingCart') === null){
      span2.textContent = 0;}
    else{
      span2.textContent = JSON.parse(localStorage.getItem('shoppingCart')).length;
    }
  a4.appendChild(icon2);
  a4.appendChild(span2);

  const div3 = document.createElement('div');
  div3.classList.add('dropdown');

  const a5 = document.createElement('a');
  a5.classList.add('link-secondary', 'me-3', 'dropdown-toggle', 'hidden-arrow');
  a5.href = '#';
  a5.id = 'navbarDropdownMenuLink';
  a5.role = 'button';
  a5.dataset.mdbToggle = 'dropdown';
  a5.setAttribute('aria-expanded', 'false');

  const icon3 = document.createElement('i');
  icon3.classList.add('fas', 'fa-bell');
  a5.appendChild(icon3);

  const span = document.createElement('span');
  span.classList.add('badge', 'rounded-pill', 'badge-notification', 'bg-danger');
  span.textContent = '1';
  a5.appendChild(span);

  const ul2 = document.createElement('ul');
  ul2.classList.add('dropdown-menu', 'dropdown-menu-end');
  ul2.setAttribute('aria-labelledby', 'navbarDropdownMenuLink');

  const li4 = document.createElement('li');

  const a6 = document.createElement('a');
  a6.classList.add('dropdown-item');
  a6.href = '#';
  a6.textContent = 'Some news';
  li4.appendChild(a6);

  const li5 = document.createElement('li');

  const a7 = document.createElement('a');
  a7.classList.add('dropdown-item');
  a7.href = '#';
  a7.textContent = 'Another news';
  li5.appendChild(a7);

  const li6 = document.createElement('li');

  const a8 = document.createElement('a');
  a8.classList.add('dropdown-item');
  a8.href = '#';
  a8.textContent = 'Something else here';
  li6.appendChild(a8);

  ul2.appendChild(li4);
  ul2.appendChild(li5);
  ul2.appendChild(li6);

  div3.appendChild(a5);
  div3.appendChild(ul2);

  const div4 = document.createElement('div');
  div4.classList.add('dropdown');

  const a9 = document.createElement('a');
  a9.classList.add('dropdown-toggle', 'd-flex', 'align-items-center', 'hidden-arrow');
  a9.href = '#';
  a9.id = 'navbarDropdownMenuAvatar';
  a9.role = 'button';
  a9.dataset.mdbToggle = 'dropdown';
  a9.setAttribute('aria-expanded', 'false');

  const img2 = document.createElement('img');
  img2.src = 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp';
  img2.classList.add('rounded-circle');
  img2.height = '25';

  const ul3 = document.createElement('ul');
  ul3.classList.add('dropdown-menu', 'dropdown-menu-end');
  ul3.setAttribute('aria-labelledby', 'navbarDropdownMenuAvatar');

  const li7 = document.createElement('li');

  const a10 = document.createElement('a');
  a10.classList.add('dropdown-item');
  a10.href = '#';
  a10.textContent = 'My profile';
  li7.appendChild(a10);

  const li8 = document.createElement('li');

  const a11 = document.createElement('button');
  a11.classList.add('dropdown-item', 'btn', 'btn-link', 'border-0');
  a11.textContent = 'Settings';
  li8.appendChild(a11);
  // li8.appendChild(modalLogin());

  const li9 = document.createElement('li');

  const a12 = document.createElement('a');
  a12.classList.add('dropdown-item');
  a12.href = 'index.html';
  a12.textContent = 'Logout';
  // addEventListener('click', () => {
  //   localStorage.removeItem('user');
  //   localStorage.removeItem('shoppingCart');
  //   window.location.href = 'index.html';
  // });
  li9.appendChild(a12);
  
  ul3.appendChild(li7);
  ul3.appendChild(li8);
  ul3.appendChild(li9);

  a9.appendChild(img2);
  div4.appendChild(a9);
  div4.appendChild(ul3);

  div2.appendChild(a4);
  // div2.appendChild(div3);
  div2.appendChild(div4);

  div.appendChild(a);
  div.appendChild(ul);
  div.appendChild(div2);

  container.appendChild(button);
  container.appendChild(div);

  navbar.appendChild(container);

  return navbar;

}

