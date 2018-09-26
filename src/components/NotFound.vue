<template>
  <div>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm10 md8>
        <v-alert :value="true" color="warning" icon="new_releases">
          <p class="headline mb-1">404 Not Found.</p>
          <p class="mb-1">お探しのページは見つかりませんでした。</p>
        </v-alert>
        <p class="text-xs-right"><v-btn color="primary" outline to="/blog">Go back home</v-btn></p>
      </v-flex>
    </v-layout>
  </div>
</template>