import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    groupId: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <section className="form-wrapper">
      <h2>Реєстраційна форма</h2>
      <form className="user-form">
        <div className="input-field">
          <label htmlFor="firstName">Ім'я</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleInputChange}
            placeholder="Введіть ім'я"
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Прізвище</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleInputChange}
            placeholder="Введіть прізвище"
          />
        </div>
        <div className="input-field">
          <label htmlFor="groupId">Код групи</label>
          <input
            type="text"
            id="groupId"
            name="groupId"
            value={form.groupId}
            onChange={handleInputChange}
            placeholder="Введіть код групи"
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Введіть електронну пошту"
          />
        </div>
      </form>
      <section className="display-data">
        <h3>Введені дані:</h3>
        <p><strong>Ім'я:</strong> {form.firstName || "Немає даних"}</p>
        <p><strong>Прізвище:</strong> {form.lastName || "Немає даних"}</p>
        <p><strong>Код групи:</strong> {form.groupId || "Немає даних"}</p>
        <p><strong>Email:</strong> {form.email || "Немає даних"}</p>
      </section>
    </section>
  );
};

export default UserForm;