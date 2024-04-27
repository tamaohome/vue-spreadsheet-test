<script setup>
import { onMounted, reactive, ref } from 'vue';
import JspreadsheetTest from "./components/JspreadsheetTest.vue";
// import HandsontableTest from "./components/HandsontableTest.vue";
import { getData, columns } from "../sample/yubin";

const reactiveData = ref([]);
const reactiveColumns = ref(columns);

onMounted(async () => {
  reactiveData.value = await getData();
});
</script>

<template>
  <JspreadsheetTest :data="reactiveData" :columns="reactiveColumns" />
  <!-- <HandsontableTest :data="reactiveData" :columns="reactiveColumns" /> -->
</template>
