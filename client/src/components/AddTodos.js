import React from 'react';

const AddTodos = () => {
    return (
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
    )
}

export default AddTodos