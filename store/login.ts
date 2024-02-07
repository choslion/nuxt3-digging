import { defineStore } from "pinia";

export const userInfoStore = defineStore("login", () => {
  const state = {
    checkLogin: ref(true),
    userList: ref([]),
  };

  const checkLogin1 = computed(() => state.checkLogin.value);

  const checkLoginStatus = () => {
    console.log(checkLogin1.value);

    if (localStorage.getItem("userId")) {
      state.checkLogin.value = false;
    } else {
      state.checkLogin.value = true;
    }
  };

  const logout = () => {
    localStorage.removeItem("userId");
    state.checkLogin.value = true;
  };

  const getUserList = () => {
    console.log(state.userList);
  };

  return {
    ...state,
    checkLogin1,
    checkLoginStatus,
    getUserList,
    logout,
  };
});
