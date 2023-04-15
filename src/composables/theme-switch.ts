import { useStorage } from "@vueuse/core";
import { readonly, watch } from "vue";

export function useThemeSwitch() {
  const isDarkThemeEnabled = useStorage("isDarkThemeEnabled", true);

  watch(
    isDarkThemeEnabled,
    (isDarkTheme) => {
      document.body.classList[isDarkTheme ? "add" : "remove"]("dark-mode");
    },
    {
      immediate: true,
    }
  );

  const toggleThemeMode = () => {
    isDarkThemeEnabled.value = !isDarkThemeEnabled.value;
  };

  return {
    isDarkThemeEnabled: readonly(isDarkThemeEnabled),
    toggleThemeMode,
  };
}
