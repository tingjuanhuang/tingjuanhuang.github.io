<template>
  <header class="navbar sticky-top navbar-expand-lg p-0">
    <div class="container-fluid">
        <h1>
          <a class="navbar-brand" href="#">TINGJUANHUANG</a>
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/projects">Projects</router-link>
              </li>
          </ul>
        </div>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap'; 
</style>
