<template lang='pug'>
  div
    h2 Contact
    p You can find me on:
    div
      a(href="https://www.facebook.com/ilya.vasilyev.5817" target="_blank").likeButton Facebook
      a(href="https://github.com/ilya-vasilyev" target="_blank").likeButton GitHub
      a(href="https://www.linkedin.com/in/ilya-vasilyev-71a12675/" target="_blank").likeButton LinkedIn
    p But the best way to contact me is via e-mail, just drop your e-mail and messege here to start conversation
    input(id="email" type="text" placeholder="e-mail" v-model="email" @input="writing" @keydown.enter.ctrl="sendButton")
    textarea(id="msg" placeholder="messege" v-model="msg" @input="writing" @keydown.enter.ctrl="sendButton")
    i(v-if="statusText" v-bind:class="status") {{statusText}}
    button(id="sendButton" @click="sendButton" @keydown.enter="sendButton" @keydown.enter.ctrl="sendButton" v-bind:disabled="status == 'fail' || status == 'sending'" v-if="status !== 'success'") {{buttonText}}
    hr
</template>

<script>

export default {
  name: 'Contact',
  data () {
    return {
      email: '',
      msg: '',
      status: '',
      statusText: '',
      buttonText: 'Send'
    }
  },
  created: function() {
    window.scrollTo(0, 0);
  },
  methods: {
    writing: function () {
      this.status = ''
      this.statusText = ''
      this.buttonText = 'Send'
    },
    sendButton: function () {
      // catch warnings (only email or only msg)
      if (this.status == 'warning') {
        this.change('sending', "Sending your message", "Sending...")
        this.toServer()
      } else {
        // catch no email & no msg
        if (!this.email.length && !this.msg.length) {
          this.change('fail', "There is no e-mail or messege to send", "Can't send")
        }
        // catch only msg
        else if (!this.email.length && this.msg.length) {
          this.change('warning', "You don't want to provide your e-mail?", "Yes, send anonymous message")
          this.focusTo('sendButton')
        }
        // catch if email is correct
        else if ( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email) ) {
          // catch if email is correct and msg is not empty
          if (this.msg.length) {
            this.change('sending', "Sending your message", "Sending...")
            this.toServer()
          // catch if email is correct and no msg
          } else {
            this.change('warning', "You don't want to write any messege?", "Yes, send only e-mail")
            this.focusTo('sendButton')
          }
        // catch if email is invalid
        } else {
          let self = this
          this.change('fail', 'Something wrong with your e-mail, fix it please', "Can't send")
          setTimeout(function () {self.focusTo('email')}, 200)
        }
      }
    },
    toServer: function () {
      const self = this

      // setTimeout(function () {
      //   console.info( 'server 200' )
      //   self.email = ''
      //   self.msg = ''
      //   self.change('success', "Your messege was seccessefully sent", "Send")
      //   self.$forceUpdate()
      // }, 1000)

      setTimeout(function () {
        console.info( 'server 500' )
        self.change('warning', 'Thanks for your effort, but this contact form is not working. Will be fixed soon', "Send again")
        self.$forceUpdate()
        setTimeout(function () {self.focusTo('sendButton')}, 0)
      }, 1200)

    },
    change: function (status,statusText,buttonText) {
      this.status = status
      this.statusText = statusText
      this.buttonText = buttonText
    },
    focusTo: function (id) {
      document.getElementById(id).focus()
    }
  },
}
</script>

<style scoped lang='scss'>

@import "../assets/_common.scss";

i.success {
  color: $successColor;
  &::before {color: #fff; background: $successColor; border-color: $successColor}
}
i.warning {
  color: $warningColor;
  &::before {color: #fff; background: $warningColor; border-color: $warningColor}
}
i.fail {
  color: $failColor;
  &::before {color: #fff; background: $failColor; border-color: $failColor}
}


</style>
