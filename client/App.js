import './App.css';
function App() {
return (
<div className="container todobox">
    <form>
        <div className="form-group mb-3">
            <label>Title</label>
            <input type="text" className="form-control" placeholder="Enter title" />
        </div>
        <div className="form-group mb-3">
            <label>Detail</label>
            <input type="text" className="form-control" placeholder="Enter Detail" />
        </div>
        <div className="form-group mb-3">
            <label >Date</label>
            <input type="date" className="form-control" placeholder="Password" />
        </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    <div className="list-group mt-4">
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Todo title</h5>
            <small>todo date</small>
        </div>
    <p className="mb-1">Todo detail Todo detail Todo detail Todo detail. </p>
        <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg></small>
                </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
    <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Todo title</h5>
        <small>todo date</small>
        </div>
    <p className="mb-1">Todo detail Todo detail Todo detail Todo detail. </p>
        <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg></small>
            </a>
        </div>
    </div>
    );
}
export default App;