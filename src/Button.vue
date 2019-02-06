<template>
    <button class="rd-button">hi</button>
</template>

<script>
export default {

}
</script>

<style  lang="scss" scoped>
.rd-button {
  font-size: var(--button-font-size);
  height: var(--button-height);
  padding: 0 1rem;
  border-radius: var(--button-radius);
  border: 1px solid var(--button-border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>