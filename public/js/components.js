
//Creating the Vue object.
const rootComponent = {
  data() {
    return{
      pollingId: null,
    }
  },

  mounted: function() {
  },

  beforeUnmount: function() {
  },

  methods: {
    sendMail: function(mail){
    }, // end sendMail

    deleteMail: function(){
    },

    resetDisplay: function() {
    },

    refreshMailList: function(){
    },

    initAddressBook: function(){
    }, //end initAddressBook
  }, //end methods
  template:``
} //end options

//==== mail-list==============================================================
const mailListComponent = {
  name: "mail-list",
};

const app = Vue.createApp(rootComponent);
app.component('mail-list', mailListComponent);
const vm = app.mount("#app");
