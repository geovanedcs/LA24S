// export const sidebarComponent =
// `
// <nav class="sidebar bg-light">
// <div>
//   <ul class="nav flex-column">
//     <li class="nav-item">
//       <a href="" class="nav-link"
//         ><i data-feather="home" class="mr-5"></i><span>Dashboard</span></a
//       >
//     </li>
//     <li class="nav-item">
//       <a href="" class="nav-link"
//         ><i data-feather="check-circle" class="mr-5"></i
//         ><span>Pedidos</span></a
//       >
//     </li>
//     <li class="nav-item">
//       <a href="" class="nav-link"
//         ><i data-feather="user" class="mr-5"></i><span>Clientes</span></a
//       >
//     </li>
//     <li class="nav-item">
//       <a href="" class="nav-link"
//         ><i data-feather="clipboard" class="mr-5"></i
//         ><span>Relatórios</span></a
//       >
//     </li>
//     <li class="nav-item">
//       <a href="" class="nav-link"
//         ><i data-feather="grid" class="mr-5"></i
//         ><span>Integração</span></a
//       >
//     </li>
//   </ul>

//   <ul class="nav flex-column ms-2">
//     <li class="nav-item mt-2">
//       <a href="" class="btn btn-success"
//         ><i data-feather="bar-chart"></i><span>Lorem Ipsum</span></a
//       >
//     </li>
//     <li class="nav-item mt-2">
//       <a href="" class="btn btn-danger"
//         ><i data-feather="bar-chart"></i><span>Lorem Ipsum</span></a
//       >
//     </li>
//     <li class="nav-item mt-2">
//       <a href="" class="btn btn-primary"
//         ><i data-feather="bar-chart"></i><span>Lorem Ipsum</span></a
//       >
//     </li>
//   </ul>
// </div>
// </nav>
// `

export function sidebarComponent() {
    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('sidebar', 'bg-light');
    const sidebarUl = document.createElement('ul');
    sidebarUl.classList.add('nav', 'flex-column');
    sidebarDiv.appendChild(sidebarUl);

    const addNavItem = function(text, icon, href){
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        const link = document.createElement('a');
        link.href = href;
        link.classList.add('nav-link');
        link.innerHTML = `<i data-feather="${icon}" class="mr-5"></i><span>${text}</span>`;
        listItem.appendChild(link);
        sidebarUl.appendChild(listItem);
    }

    addNavItem('Dashboard', 'home', '#');
    addNavItem('Pedidos', 'check-circle', '#');
    addNavItem('Clientes', 'user', '#');
    addNavItem('Relatórios', 'clipboard', '#');
    addNavItem('Integração', 'grid', '#');

    const sidebarUl2 = document.createElement('ul');
    sidebarUl2.classList.add('nav', 'flex-column', 'ms-2');
    sidebarDiv.appendChild(sidebarUl2);

    const addNavBtn = function(text, icon, href, color){
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item', 'mt-2');
        const link = document.createElement('a');
        link.href = href;
        link.classList.add('btn', `btn-${color}`);
        link.innerHTML = `<i data-feather="${icon}"></i><span>${text}</span>`;
        listItem.appendChild(link);
        sidebarUl2.appendChild(listItem);
    }

    addNavBtn('Lorem Ipsum', 'bar-chart', '#', 'success');
    addNavBtn('Lorem Ipsum', 'bar-chart', '#', 'danger');
    addNavBtn('Lorem Ipsum', 'bar-chart', '#', 'warning');

    return sidebarDiv;
}