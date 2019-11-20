<template>
<div>
  <div>Business Details </div>
  <b-input
          type="email"
          required
          placeholder="Enter email"
        />
         <b-input
          required
          placeholder="Enter name"
        />
         <b-input
          type="email"
          required
          placeholder="Enter address"
        />
         <b-input
          required
          placeholder="Enter state"
        />
          <b-input
          required
          placeholder="No of Working Days in a month"
        />
         <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>

  </div>
        <b-button type="submit" @click.prevent="go_step3()" variant="primary">Next</b-button>
</div>
</template>
<script>
/*eslint-disable*/
// import axios from "axios";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone_numbers: [{ value: "" }],
      address: "",
      avatar: null,
      added_contact: false,
      selected: null,
        options: [
          { value: null, text: 'Select WorkWeek' },
          { value: 'e', text: 'Mon-Fri' },
          { value: 'a', text: 'Mon-Sat' },
          { value: 'b', text: 'Mon-Thu' },
          { value: { C: '3PO' }, text: '3days out of 7' },
          { value: 'd', text: 'Others', disabled: true }
        ]
    };
  },
  methods: {
    go_step3 () {
     this.$router.push({ path: "/step3" })
}
  }
}
</script>
<style scoped>
</style>
