<template lang="pug">
// Main Content
main.mb-4
  .container.px-4.px-lg-5
    .row.gx-4.gx-lg-5.justify-content-center
      .col-md-10.col-lg-8.col-xl-7
        p
          | Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!

        .my-5
          // * * * * * * * * * * * * * * *
          // * * SB Forms Contact Form * *
          // * * * * * * * * * * * * * * *

          form(
            data-netlify='true',
            data-netlify-honeypot='bot-field',
            name='contact-me',
            method='post',
            @submit.prevent='handleSubmit'
          )
            .form-floating
              input(type='hidden', name='form-name', value='contact-me')
              input#name.form-control(
                type='text',
                name='name',
                placeholder='Enter your name...',
                data-sb-validations='required',
                v-model='name',
                :class='$v.name.$error && "is-invalid"',
                @blur='$v.name.$touch()'
              )
              label(for='name') Name
              .invalid-feedback(data-sb-feedback='name:required')
                | A name is required.
            .form-floating
              input#email.form-control(
                type='email',
                name='email',
                placeholder='Enter your email...',
                data-sb-validations='required,email',
                v-model='email',
                :class='$v.email.$error && "is-invalid"',
                @blur='$v.email.$touch()'
              )
              label(for='email') Email address
              .invalid-feedback(data-sb-feedback='email:required')
                | An email is required.
              .invalid-feedback(data-sb-feedback='email:email')
                | Email is not valid.
            .form-floating
              input#subject.form-control(
                type='text',
                name='subject',
                placeholder='Enter the subject here...',
                data-sb-validations='required',
                v-model='subject',
                :class='$v.subject.$error && "is-invalid"',
                @blur='$v.subject.$touch()'
              )
              label(for='subject') Subject
              .invalid-feedback(data-sb-feedback='subject:required')
                | The subject is required.
            .form-floating
              textarea#message.form-control(
                placeholder='Enter your message here...',
                name='message',
                style='height: 12rem',
                data-sb-validations='required',
                v-model='message',
                :class='$v.message.$error && "is-invalid"',
                @blur='$v.message.$touch()'
              )
              label(for='message') Message
              .invalid-feedback(data-sb-feedback='message:required')
                | A message is required.

            br

            // Submit Button
            button#submitButton.btn.btn-primary.text-uppercase(
              type='submit',
              :class='$v.$invalid && "disabled"'
            ) Send

            FlashMessage(position='right bottom')
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default {
  data() {
    return { ...initialState }
  },
  validations: () => {
    return {
      name: {
        required,
      },
      email: {
        email,
        required,
      },
      subject: {
        required,
      },
      message: {
        required,
      },
    }
  },
  head() {
    return {
      title: 'Contact me',
    }
  },
  methods: {
    async handleSubmit(event) {
      const params = new URLSearchParams([
        ...new FormData(event.target).entries(),
      ])

      try {
        const { status } = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString(),
        })
        if (status === 200) {
          this.showSuccessMessage()
          this.resetForm()
        } else {
          throw new Error(status)
        }
      } catch (error) {
        console.error(error)
        this.showErrorMessage()
      }
    },
    showSuccessMessage() {
      this.flashMessage.success({
        title: 'Your message has been successfully sent!',
        message:
          "Thanks for your message! I'll get back to you as soon as I can :)",
      })
    },
    showErrorMessage() {
      this.flashMessage.error({
        title: 'Message not sent!',
        message: 'Something went wrong! Please try again!',
      })
    },
    resetForm() {
      Object.assign(this.$data, initialState)
      this.$v.$reset()
    },
  },
}
</script>
