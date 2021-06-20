<template lang="pug">
nav#mainNav.navbar.navbar-expand-lg.navbar-light
  .container.px-4.px-lg-5
    a.navbar-brand(href='index.html') Start Bootstrap
    button.navbar-toggler(
      type='button',
      data-bs-toggle='collapse',
      data-bs-target='#navbarResponsive',
      aria-controls='navbarResponsive',
      aria-expanded='false',
      aria-label='Toggle navigation'
    )
      | Menu
      i.fas.fa-bars
    #navbarResponsive.collapse.navbar-collapse
      ul.navbar-nav.ms-auto.py-4.py-lg-0
        li.nav-item
          NuxtLink.nav-link.px-lg-3.py-3.py-lg-4(to='/') Home
        li.nav-item
          NuxtLink.nav-link.px-lg-3.py-3.py-lg-4(to='/about') About
        li.nav-item
          NuxtLink.nav-link.px-lg-3.py-3.py-lg-4(to='/contact') Contact
</template>
