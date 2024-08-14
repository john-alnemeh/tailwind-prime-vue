<template>
  <Form
    @submit="handleSubmit(onSubmit)"
    :validation-schema="validationSchema"
    class="space-y-4"
  >
    <div v-for="(input, index) in inputs.fields" :key="index" class="mb-4">
      <label :for="input.name" class="block mb-2 text-white">{{ input.label }}</label>
      <Field :name="input.name" v-slot="{ field }">
        <component
          :is="getComponent(input.type)"
          v-bind="{ ...field, ...input.attrs }"
          :id="input.name"
          :name="input.name"
          :type="input.type"
          :placeholder="input.placeholder"
          inputClass="w-full px-3 py-2 bg-gray-700 !text-black rounded-lg"
        >
        </component>
      </Field>
      <br />
      <ErrorMessage :name="input.name" class="text-red-500" />
    </div>
    <button
      :label="inputs.button.label"
      :icon="inputs.button.icon"
      type="submit"
      class="w-full py-2 bg-[#1bc95b] text-white font-bold rounded-lg hover:bg-[#16a34a]"
      iconClass="mr-3"
    >
      Submit
    </button>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { getComponent } from "@/utils/getComponent";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";

const props = defineProps({
  inputs: {
    type: Object,
    required: true,
  },
  validationSchema: {
    type: Object,
    required: true,
  },
});

const form = ref({});
const { handleSubmit } = useForm({
  validationSchema: props.validationSchema,
});
const onSubmit = (values) => {
  console.log(values);
};
</script>
