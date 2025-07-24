// AuthForm.jsx
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../assets/styles/AuthForm.module.scss";

const AuthForm = ({ mode }) => {
  const [isLogin, setIsLogin] = useState(mode === "login");
  const allowToggle = mode === undefined;

  useEffect(() => {
    if (mode) setIsLogin(mode === "login");
  }, [mode]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(`${isLogin ? "Login" : "Signup"} data:`, data);
    reset();
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className={styles.container}>


      <div className={styles.card}>
        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? "login" : "signup"}
            onSubmit={handleSubmit(onSubmit)}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className={styles.form}
          >
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>

            {!isLogin && (
              <label>
                Full Name
                <input
                  type="text"
                  {...register("name", { required: !isLogin })}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className={styles.error}>Name is required</p>
                )}
              </label>
            )}

            <label>
              Email
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className={styles.error}>Email is required</p>
              )}
            </label>

            <label>
              Password
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className={styles.error}>
                  Password must be at least 6 characters
                </p>
              )}
            </label>

            <button type="submit">
              {isLogin ? "Login" : "Create Account"}
            </button>

            {allowToggle && (
              <p className={styles.toggle}>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Sign up" : "Login"}
                </span>
              </p>
            )}
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthForm;
