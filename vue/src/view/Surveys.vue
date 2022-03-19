<template>
  <PageComponent title="Survey"> Content display here </PageComponent>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
const props = defineProps({
  title: String,
});
</script>

<style></style>
