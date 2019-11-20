<template>
  <div>
    <!-- <div class="header-body">
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/Contacts">All Contacts</router-link>
          </b-nav-item>
          <b-nav-item>|</b-nav-item>
          <b-nav-item>
            <router-link to="/NewContact">New</router-link>
          </b-nav-item>
          <b-nav-item>|</b-nav-item>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" v-model="search_item" placeholder="Search"></b-form-input>
            <b-button @click.prevent="search()" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>
    </div> -->
    <template>
 <b-breadcrumb class="flex-2" :items="items"></b-breadcrumb>
</template>
    <router-view></router-view>
  </div>
</template>
<script>
/*eslint-disable*/
// import axios from "axios";
export default {
  data() {
    return {
      search_item: "",
      items: [
          {
            text: 'Home',
            href: '/'
          },
          {
            text: 'Step 1',
            to: { name: 'step1' }
          },
          {
            text: 'Step 2',
            to: { name: 'step2' }
          },
          {
            text: 'Step 3',
            to: { name: 'step3' }
          },
          {
            text: 'End ',
            to: { name: '/' }
          }
        ]
    };
  },

  name: "HeaderNav",

  beforeMount() {},
};
</script>

<style>
.header-body {
  display: flex;
  justify-content: flex-end;
}
#nav {
  padding: 30px;
}
.title {
  width: 70%;
  height: 400px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.flex-2{
  display: flex;
  justify-content: center
}
</style>
