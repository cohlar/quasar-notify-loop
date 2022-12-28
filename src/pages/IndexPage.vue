<template>
  <q-page class="row items-center justify-evenly">
    <q-input type="number" v-model.number="area" label="Area" />
    <q-input
      v-for="figure in planeFigures"
      :key="figure"
      type="number"
      :modelValue="calculateFromArea[figure](area, notifyWarning)"
      :label="label[figure]"
      readonly
    />
    <q-btn @click="clearArea">Clear Area</q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { calculateFromArea, PlaneFigure, planeFigures } from 'src/stateless-logic/geometry';
import { ref, watchEffect } from 'vue';

const $q = useQuasar();
const notifyWarning = (message: string) => $q.notify({ type: 'warning', message });
const notifyError = (message: string) => $q.notify({ type: 'negative', message });

const area = ref<number | ''>(0);

const clearArea = () => {
  area.value = '';
};

watchEffect(() => {
  if (area.value === '') {
    notifyError('Please provide an area.');
  }
});

const label: Record<PlaneFigure, string> = {
  circle: 'Circle Radius',
  square: 'Square Side',
  'equilateral triangle': 'Equilateral Triangle Side',
};
</script>
