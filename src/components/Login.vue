<template>
  <div class="row">
    <form>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password" />
      </div>
      <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign in</button>
      <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign out</button>
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  methods: {
    signIn() {

    },
    signOut() {

    }
  }
}
</script>
