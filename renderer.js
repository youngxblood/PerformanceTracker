
var message = '';
new Vue({
  el: '#app',

  data: {
      // Needed to bind information from user input to reactive variable
      message: message,
      entries: [],
    },

    methods:{
      // Method to delete entry
      deleteEntry: function(entry) {
        this.entries.splice(this.entries.indexOf(entry), 1)
      },

      stringToArray: function()
      {
        // Splits full string into an array
        var infoArray = this.message.split(' ')

        // Null check for data
        if (this.message !== '') {
          if (infoArray.length === 339)
          {
        // Add stats to 'entries' array to be displayed
        var time = infoArray[302] - infoArray[304]

        this.entries.push({
          level: infoArray[230],
          cl: infoArray[231],
          avgFPS: infoArray[250],
          over30:  infoArray[251],
          over60: infoArray[252],
          avgDynRes:  infoArray[256],
          fullRes:  infoArray[257],
          avgGPU:  infoArray[260],
          avgRT: infoArray[262],
          avgGT: infoArray[264],
          avgGPUWork: infoArray[266],
          time: time,
          hitches: infoArray[307],
          // this.message = ''
        })
      } else if(infoArray.length === 340) {

        var time = infoArray[303] - infoArray[305]

        this.entries.push({
          level: infoArray[230],
          cl: infoArray[231],
          avgFPS: infoArray[251],
          over30:  infoArray[252],
          over60: infoArray[253],
          avgDynRes:  infoArray[257],
          fullRes:  infoArray[258],
          avgGPU:  infoArray[261],
          avgRT: infoArray[263],
          avgGT: infoArray[265],
          avgGPUWork: infoArray[267],
          time: time,
          hitches: infoArray[308],
        })
        }
      }
        // Resets input to empty
        this.message = ''
    }
  },
});


Vue.component('modal', {
  template: '#modal-template',
  props: ['show'],
  methods: {
    close: function () {
      this.$emit('close');
    }
  }
});

new Vue({
  el: '#modal',
  data: {
    showModal: false
  }
});
