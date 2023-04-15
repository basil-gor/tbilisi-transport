<template>
  <button
    class="theme-mode-button"
    title="Toggles light & dark"
    aria-label="auto"
    aria-live="polite"
    @click="toggleThemeMode"
  >
    <svg
      class="theme-mode-button__icon"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <mask id="moon-mask" v-if="isDarkThemeEnabled">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="17" cy="10" r="6" fill="black" />
      </mask>
      <circle
        class="sun"
        cx="12"
        cy="12"
        r="6"
        mask="url(#moon-mask)"
        fill="currentColor"
      />
      <g stroke="currentColor" v-if="!isDarkThemeEnabled">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useThemeSwitch } from "@/composables/theme-switch";

const { isDarkThemeEnabled, toggleThemeMode } = useThemeSwitch();
</script>

<style scoped>
.theme-mode-button {
  color: var(--color-text);
  font-size: inherit;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  /* clear default button styles */
  background: none;
  outline: none;
  user-select: none;
  border: none;
  margin: 0;
  padding: 0;
}

.theme-mode-button:hover {
  transform: scale(1.05);
  text-shadow: 0 0 4px rgba(122, 111, 111, 0.9);
}

.theme-mode-button__icon {
  width: 32px;
  height: 32px;
}
</style>
