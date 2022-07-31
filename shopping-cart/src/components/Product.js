import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5 mr-3">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">
            ₹{props.product.price.toLocaleString(undefined, 0)}
          </span>
        </h2>
      </div>
      <div className="col-2">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>

          <label class="btn btn-warning" aria-readonly="true">{props.product.quantity}</label>

          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-1">
        ${props.product.price.toLocaleString()}
      </div>
      <div className="col-1">
        ${(props.product.quantity * props.product.price).toLocaleString(
          undefined,
          0
        )}
      </div>
      <button
        className="col-1 btn btn-danger"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
