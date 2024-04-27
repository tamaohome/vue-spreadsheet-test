<template>
  <h2>jSpreadsheet 表示テスト</h2>
  <div id="jss-sample" ref="jssRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import "jsuites/dist/jsuites.js";
import "jsuites/dist/jsuites.css";
import "jspreadsheet-ce/dist/jspreadsheet.css";
import jSpreadSheet from "jspreadsheet-ce";
import jspreadsheet, { JspreadsheetInstance, Column } from "jspreadsheet-ce";

const jssRef = ref<HTMLDivElement | null>(null);
const jss = ref<JspreadsheetInstance | null>(null);

const props = defineProps({
  data: {
    type: Array as () => Array<Array<string | number>>,
    required: true,
  },
  columns: {
    type: Array as () => Array<Column>,
    required: true,
  },
});

onMounted(() => {
  if (jssRef.value) {
    jss.value = jspreadsheet(jssRef.value, {
      data: props.data,
      columns: props.columns,
    });
  }
});
</script>
