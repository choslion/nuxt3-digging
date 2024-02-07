import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const state = {
    count: ref(0),
    count2: ref(2),
    count3: ref(3),
  };

  const doubleCount = computed(() => state.count.value * 2);

  const doubleDouble = computed(() => state.count.value * 4);

  const doubleDouble2 = computed(() => state.count2.value * 2);

  const increment = () => {
    state.count.value++;
    state.count2.value++;
  };

  return {
    ...state,
    increment,
    doubleCount,
    doubleDouble,
    doubleDouble2,
  };
});

// 1. _ref()_ => state 정의
// 2. _computed()_ => getters 정의
// 3. _function()_ => actions 정의
