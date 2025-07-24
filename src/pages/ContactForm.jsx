import React from "react";
import { useForm } from "react-hook-form";
import styles from "../assets/styles/ContactForm.module.scss";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset(); // Optional: reset form after submit
  };

  return (
    <div className={styles.contactWrapper}>
      <h1 className={styles.title}>Contact us</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Full name <span>*</span>
          <input
            type="text"
            {...register("name", { required: "Full name is required" })}
            placeholder="Your full name"
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </label>

        <label>
          Email <span>*</span>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </label>

        <label>
          Subject <span>*</span>
          <select
            {...register("subject", { required: "Please select a subject" })}
            defaultValue=""
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="support">Support</option>
            <option value="product">Product Inquiry</option>
            <option value="feedback">Feedback</option>
          </select>
          {errors.subject && (
            <p className={styles.error}>{errors.subject.message}</p>
          )}
        </label>

        <label>
          Message <span>*</span>
          <textarea
            rows="5"
            {...register("message", { required: "Message is required" })}
            placeholder="Write your message here..."
          ></textarea>
          {errors.message && (
            <p className={styles.error}>{errors.message.message}</p>
          )}
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
