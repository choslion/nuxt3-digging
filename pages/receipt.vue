<template>
  <div>
    <div class="container">
      <form v-if="userInfo.checkLogin" @submit.prevent="onSubmit" action="">
        <label for="id">아이디를 입력하세요.</label>
        <input v-model="userId" name="id" type="text" />
        <button type="submit">로그인</button>
      </form>
      <button @click="userInfo.logout" v-else>로그아웃</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { userInfoStore } from "../store/login";
const userInfo = userInfoStore();
// const checkLogin = userInfo.checkLogin;
onBeforeMount(() => {
  console.log("before mount");
  userInfo.checkLoginStatus();
});

onMounted(() => {
  console.log("mounted");

  console.log(typeof localStorage.checkLogin);
});

const userId = ref("");
const onSubmit = () => {
  console.log(userId.value);
  localStorage.setItem("userId", JSON.stringify(userId.value));
  localStorage.setItem("checkLogin", JSON.stringify(userInfo.checkLogin));
  userId.value = "";
};

// watch(userInfo.checkLogin, (newValue, oldValue) => {
//   console.log(`Count changed from ${oldValue} to ${newValue}`);
// });
</script>

<style lang="scss" scoped></style>
