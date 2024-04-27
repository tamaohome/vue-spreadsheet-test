<template>
  <h2>Handsontable 表示テスト</h2>
  <div id="hot" ref="hotRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.css";

type ColumnSettings = Handsontable.GridSettings['columns'];

// グリッドテーブルを描画するDOMオブジェクトを取得
const hotRef = ref<HTMLDivElement | null>(null);
const hot = ref<Handsontable | null>(null);

const props = defineProps({
  data: {
    type: Array as () => Array<Array<string | number>>,
    required: true,
  },
  columns: {
    type: Array as () => ColumnSettings,
    required: true,
  },
});

onMounted(() => {
  if (hotRef.value) {
    hot.value = new Handsontable(hotRef.value, {
      data: props.data,
      columns: props.columns,
    });
  }
});

</script>
