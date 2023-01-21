import React, { useState } from "react";
import * as yup from "yup";
import schema from "../Validation/ForSchema";

const initialValues = {
  username: "",
  size: "",
  pepperoni: false,
  sausage: false,
  greenPepper: false,
  blackOlive: false,
  special: "",
};

const initialErrorValues = {
  name: "",
  size: "",
  pepperoni: "",
  sausage: "",
  greenPepper: "",
  blackOlive: "",
  special: "",
};

const OrderForm = (props) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrorValues] = useState(initialErrorValues);

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    handleChange(name, newVal);
    console.log(name, newVal);
  };

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleSubmit = () => {
    console.log(formValues);
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrorValues({ ...errors, [name]: "" }))
      .catch((err) => setErrorValues({ ...errors, [name]: err.errors[0] }));
  };
  return (
    <div>
      <h1>Build your own pizza</h1>
      <p>{errors.username}</p>
      <p>{errors.size}</p>
      <p>{errors.special}</p>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            id="name-input"
            type="text"
            name="username"
            value={formValues.username}
            onChange={onChange}
          />
        </label>
        <label>
          Size:
          <select
            id="size-dropdown"
            name="size"
            value={formValues.size}
            onChange={onChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={formValues.pepperoni}
            onChange={onChange}
          />
        </label>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={formValues.sausage}
            onChange={onChange}
          />
        </label>
        <label>
          Green Pepper
          <input
            type="checkbox"
            name="greenPepper"
            checked={formValues.greenPepper}
            onChange={onChange}
          />
        </label>
        <label>
          Black Olives
          <input
            type="checkbox"
            name="blackOlive"
            checked={formValues.blackOlive}
            onChange={onChange}
          />
        </label>
        <label>
          Special instructions
          <input
            id="special-text"
            type="text"
            name="special"
            value={formValues.special}
            onChange={onChange}
          />
        </label>
        <label>
          Add to Order
          <input id="order-button" type="submit" value="Add to order" />
        </label>
      </form>
    </div>
  );
};

export default OrderForm;
