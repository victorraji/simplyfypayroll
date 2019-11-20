<template>
  <div>
    <div>
      <b-modal id="modal-scrollable" size="lg"   scrollable title="Simplify Payroll">
        <!-- <p class="my-4" v-for="i in 20" :key="i"> -->
          <div class='pad-card'>
      <b-button @click.prevent='toggler()' v-show='!details'>SHOW INFORMATION</b-button>
      <b-button @click.prevent='toggler()' v-show='details'>HIDE INFORMATION</b-button>
    </div>
        <div class="my-2">
          <div class="container">
            <div  v-for="(feature,index) in features" :key="index">
              <div >
                <b-card
                  :title="feature.title "
                  tag="article"
                  style="max-width: 200px;"
                  class="mb-5 box"
                >
                  <div>
                    <b-card-text  v-show="details">{{feature.information}}</b-card-text>
                  </div>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
    <b-carousel
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      no-animation
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10">
        <div>
          <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
            <template v-slot:header>Simplify Payroll</template>

            <template v-slot:lead>With software and services designed for your business.</template>

            <hr class="my-4" />

            <p>
              Technology alone is not enough
You need technology plus expertise, at every level and at every stage, to keep your human
resources software modern and adaptable. You need expertise before you make a purchase
when you’re working to identify the right HR solution for your business. You need expertise
throughout implementation. And you need ongoing support, not impersonal, 1-800 number call
centres. To succeed, you need a dedicated team of experts that not only understands HR
software but are also intimately familiar with your business.
            </p>
            <div class="flex-1">
              <b-button v-b-modal.modal-scrollable>Features of simplify payroll</b-button>
              <b-button variant="success" @click.prevent="new_user()" >Click to get started!!!</b-button>
            </div>
          </b-jumbotron>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {
      details: false,
      features: [{
        title:"Automated taxes",
        information:"All local, state and federal payroll taxes are calculated, filed, and paid automatically."
      },
      {
        title:"Payroll on AutoRun",
        information:"You can set payroll to run automatically each pay period. Nice!"
      },
      {
        title:"Flexible payment schedules",
        information:"Pay your team weekly, bi-weekly, twice a month, or monthly."
      },
      {
        title:"Unlimited payrolls",
        information:"Run payroll as many times as you need."
      },
      {
        title:"Accounting integrations",
        information:"Gusto integrates with QuickBooks, Xero, and FreshBooks."
      },
      {
        title:"Unlimited payrolls",
        information:"Run payroll as many times as you need."
      },
      {
        title:"Payroll reports",
        information:"Generate and download reports for payroll history, bank transactions, contractor payments, paid time off, tax payments, and more.."
      },
      {
        title:"Direct deposit",
        information:"Your employees’ paychecks go straight to their bank accounts."
      },
      {
        title:"No payroll setup fees",
        information:"Our easy-to-use software and helpful support team are here to help you get started."
      },
      {
        title:"Mobile",
        information:"Access your account and run payroll any time on your smartphone or tablet.."
      }],
      details: false
    };
  },
    methods: {
    toggler () {
      this.details = !this.details
    },
    new_user() {
     this.$router.push({ path: "/step1" })

}
}
}
</script>

<style>

.card-title{
  background-color: #17a2b8 !important
}
.card-body{
  background-color: #17a2b8 !important
}

#nav {
  padding: 30px;
}
.title {
  color: white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.flex-1 {
  display: flex;
  justify-content: space-between;
}
.colors {
  color: chocolate;
}
.phone-container {
  display: flex;
  justify-content: space-between;
}
.colortext {
  color: orangered;
}
.details-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: Auto 1fr 1fr; */
  grid-auto-rows: minmax(20px, auto);
  grid-gap: 5px;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  color: white;
  
  /* align-items: center; */
}
.pad-card {
  padding-bottom: 20px;
}
.content-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
