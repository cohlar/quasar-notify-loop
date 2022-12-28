<template>
  <q-page class="row items-center justify-evenly">
    <q-input type="number" v-model.number="radius" label="Circle Radius" />
    <q-input type="number" :modelValue="area1" label="Circle Area" readonly />
    <q-input type="number" :modelValue="area2" label="Circle Area" readonly />
    <q-input type="number" :modelValue="area3" label="Circle Area" readonly />
    <q-input type="number" :modelValue="area4" label="Circle Area" readonly />
    <q-btn @click="clearRadius">Clear Radius</q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { calculateCircleArea } from 'src/stateless-logic/calculate';
import { computed, ref } from 'vue';

const $q = useQuasar();

const radius = ref<number | ''>(1);

const area1 = computed(() => calculateCircleArea(radius.value, $q.notify));
const area2 = computed(() => calculateCircleArea(radius.value, $q.notify));
const area3 = computed(() => calculateCircleArea(radius.value, $q.notify));
const area4 = computed(() => calculateCircleArea(radius.value, $q.notify));

const clearRadius = () => {
  radius.value = '';
};
</script>
