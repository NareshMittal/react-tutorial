import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="row col-4 mb-5"
        onSubmit={(e) => {
          e.preventDefault(); // Don't refresh the whole page
          this.props.addItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            placeholder="Enter name of the item"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>

        <div className="col-4 mb-3">
          <label htmlFor="inputPrice" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            placeholder="Enter item price in $"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        
        <div>
          <button type="submit" className="btn btn-primary btn-lg col-3">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
