export const AddCustomerForm = () => {
  return (
    <form>
      <div className="text-center mb-4">
        <h2>Add Customer</h2>
      </div>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Enter customer name" />
        <button className="btn btn-primary">Add Customer</button>
      </div>
    </form>
  )
}
