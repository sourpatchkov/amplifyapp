import './home.css';

function contacts() {
  return (
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">First Name</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
    </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Last Name</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
    </div>
    <div class="form-group form-check">
    <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  );
}

export default contacts;