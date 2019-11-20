<template>
<div>
  <div>
  <b-modal id="modal-1" title="Simplify Payroll">
    <p class="my-4">You Succesfully registered Your Company!</p>
  </b-modal>
</div>
  <div>Subscribe Using Paystack</div>
        <b-button v-b-modal.modal-1  type="submit" @click.prevent="end()" variant="primary">PAY N300 NOW!! </b-button>
</div>
</template>
