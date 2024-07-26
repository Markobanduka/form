import * as React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";
import { EmailValidator, PasswordValidator } from "../Validators/FormValidator";

interface IFormInput {
  email: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const formSubmitted = (data: IFormInput) => console.log(data);

  return (
    <form onSubmit={handleSubmit(formSubmitted)}>
      <input
        placeholder="Enter your email"
        {...register("email", EmailValidator)}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        {...register("password", PasswordValidator)}
        type="password"
        placeholder="Enter your password"
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button>Login</button>
    </form>
  );
}

export default LoginForm;
