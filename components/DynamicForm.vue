<template>
  <Form
    @submit="onSubmit"
    :validation-schema="validationSchema"
    @invalid-submit="onInvalidSubmit"
  >
    <div v-for="{ as, name, label, children, ...attrs } in schema.fields" :key="name">
      <label :for="name" class="block my-2 text-white">{{ label }}</label>
      <Field
        :as="as"
        :id="name"
        :name="name"
        v-bind="attrs"
        class="w-full p-2 rounded-lg focus:border-red-500"
      >
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <br />
      <ErrorMessage :name="name" class="text-red-500" />
    </div>

    <button
      class="w-full py-2 mt-5 bg-[#1bc95b] text-white font-bold rounded-lg hover:bg-[#16a34a]"
    >
      Submit
    </button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { ref } from "vue";

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  validationSchema: {
    type: Object,
    required: true,
  },
});

function onSubmit(values) {
  console.log(values);
}

function onInvalidSubmit({ values, errors, results }) {
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}
</script>
