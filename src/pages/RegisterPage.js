import React, { FormEvent, useState } from "react";
import { firebaseAuth } from "../firebase-config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

export default function RegisterPage() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/login");
      setError("");
    } catch (error) {
      console.log("회원가입에 실패하였습니다. : ", error);
      setError("회원가입에 실패하였습니다.");
    }
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    console.log(name, value);
    if (name === "form-email") {
      setEmail(value);
    } else if (name === "form-password") {
      setPassword(value);
    } else if (name === "form-passwordConfirm") {
      setPasswordConfirm(value);
    }
  };

  return (
    <div className="register__container">
      <h2>회원가입</h2>
      <form className="register__form__container" onSubmit={onSubmit}>
        <input
          value={email}
          onChange={onChange}
          name="form-email"
          type="email"
          required
          placeholder="example@gmail.com"
        ></input>
        <input
          value={password}
          onChange={onChange}
          name="form-password"
          type="password"
          required
          placeholder="패스워드"
        ></input>
        <input
          value={passwordConfirm}
          onChange={onChange}
          name="form-passwordConfirm"
          type="password"
          required
          placeholder="패스워드 확인"
        ></input>
        {password !== "" && password === passwordConfirm ? (
          <p> 비밀번호가 일치합니다.</p>
        ) : (
          <p className="register__error">비밀번호가 일치하지 않습니다.</p>
        )}

        {error !== "" && (
          <p className="register__error">회원가입에 실패하였습니다.</p>
        )}
        <button type="submit" disabled={password !== passwordConfirm}>
          회원가입
        </button>
      </form>
    </div>
  );
}