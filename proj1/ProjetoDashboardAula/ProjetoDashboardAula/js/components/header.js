export const headerComponent = 

`<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid ps-0">
        <a class="navbar-brand w-12 text-center" href="#">Dashboard</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-between"
          id="navbarSupportedContent"
        >
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Procurar..."
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Ok</button>
          </form>
          <div class="dropdown w-12">
            <button
              class="dropdown-toggle avatar"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="img/avatar.png" alt="avatar" class="rounded-circle" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
`

