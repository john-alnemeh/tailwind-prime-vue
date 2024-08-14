<script setup>
import { ref } from "vue";
import * as Yup from "yup";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const schema = ref({
  fields: [
    {
      label: "Your username",
      name: "username",
      as: "input",
      placeholder: "Enter your username",
    },
    {
      label: "Your Email",
      name: "email",
      as: "input",
      placeholder: "Enter your email",
    },
    {
      label: "Your Password",
      name: "password",
      as: "input",
      type: "password",
      placeholder: "Enter your password",
    },
  ],
  button: { label: "Login", icon: "pi pi-user-plus" },
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
      <h1 class="mb-6 text-2xl font-bold text-center text-white">Register</h1>
      <DynamicForm :schema="schema" :validation-schema="validationSchema" />
    </div>
  </div>
</template>
