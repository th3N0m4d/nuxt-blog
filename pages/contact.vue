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
            action='/'
          )
            .form-floating
              input#name.form-control(
                type='text',
                name='name',
                placeholder='Enter your name...',
                data-sb-validations='required'
              )
              label(for='name') Name
              .invalid-feedback(data-sb-feedback='name:required')
                | A name is required.
            .form-floating
              input#email.form-control(
                type='email',
                name='email',
                placeholder='Enter your email...',
                data-sb-validations='required,email'
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
                data-sb-validations='required'
              )
              label(for='subject') Subject
              .invalid-feedback(data-sb-feedback='subject:required')
                | The subject is required.
            .form-floating
              textarea#message.form-control(
                placeholder='Enter your message here...',
                name='message',
                style='height: 12rem',
                data-sb-validations='required'
              )
              label(for='message') Message
              .invalid-feedback(data-sb-feedback='message:required')
                | A message is required.

            br

            // Submit success message
            //
            // This is what your users will see when the form
            // has successfully submitted

            #submitSuccessMessage.d-none
              .text-center.mb-3
                .fw-bolder Form submission successful!
                | To activate this form, sign up at
                br
                a(href='https://startbootstrap.com/solution/contact-forms') https://startbootstrap.com/solution/contact-forms

            // Submit error message
            //
            // This is what your users will see when there is
            // an error submitting the form

            #submitErrorMessage.d-none
              .text-center.text-danger.mb-3 Error sending message!

            // Submit Button
            button#submitButton.btn.btn-primary.text-uppercase(type='submit') Send
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact me',
    }
  },
}
</script>
