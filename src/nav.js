import {Outlet, Link} from "react-router-dom";
function Nav(){

return(

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" >
      <li class="nav-item active">
        <Link to= "/"style={{textDecoration: 'none', padding: 5}} >Home</Link>
      </li>
      <li class="nav-item">
      <Link to= "/card"style={{textDecoration: 'none', padding: 5}} >Cards</Link>
      </li>
      <li class="nav-item">
      <Link to= "/contact"style={{textDecoration: 'none', padding: 5}} >Contact</Link>
      </li>
      
  
    </ul>
    
    <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>
</nav>

)
}
export default Nav;