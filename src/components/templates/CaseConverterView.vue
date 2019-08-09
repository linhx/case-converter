<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input ref="input" v-model="freeText" @input="onInputFreeText" id="free-text" type="text" @focus="(e) => e.target.select()">
          <label for="free-text" class="active">{{ $t('freeText') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="upperCase" id="upper-case" type="text" :placeholder="$t('upperCase')" readonly @click="onClickResult">
          <label for="upper-case" class="active">{{ $t('upperCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="camelCase" id="camel-case" type="text" :placeholder="$t('camelCase')" readonly @click="onClickResult">
          <label for="camel-case" class="active">{{ $t('camelCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="snakeCase" id="snake-case" type="text" :placeholder="$t('snakeCase')" readonly @click="onClickResult">
          <label for="snake-case" class="active">{{ $t('snakeCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="kebabCase" id="kebab-case" type="text" :placeholder="$t('kebabCase')" readonly @click="onClickResult">
          <label for="kebab-case" class="active">{{ $t('kebabCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="pascalCase" id="pascal-case" type="text" :placeholder="$t('pascalCase')" readonly @click="onClickResult">
          <label for="pascal-case" class="active">{{ $t('pascalCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="upperSnakeCase" id="upper-snake-case" type="text" :placeholder="$t('upperSnakeCase')" readonly @click="onClickResult">
          <label for="upper-snake-case" class="active">{{ $t('upperSnakeCase') }}</label>
        </div>
      </div>
    </div>
    <div v-if="isAlert" class="alert"><span>Copied!</span></div>
  </div>
</template>

<script>
import converter from '@/converter'
import { debounce } from '@/utils'

export default {
  name: 'CaseConverterView',
  data () {
    return {
      freeText: '',
      upperCase: '',
      camelCase: '',
      snakeCase: '',
      kebabCase: '',
      pascalCase: '',
      upperSnakeCase: '',
      isAlert: false
    }
  },
  mounted () {
    this.$refs.input.focus()
  },
  methods: {
    onInputFreeText: debounce(function () {
      // eslint-disable-next-line no-undef
      M.updateTextFields()
      let result = converter.convert(this.freeText)
      this.upperCase = result.upperCase
      this.camelCase = result.camelCase
      this.snakeCase = result.snakeCase
      this.kebabCase = result.kebabCase
      this.pascalCase = result.pascalCase
      this.upperSnakeCase = result.upperSnakeCase
    }, 700),
    onClickResult (e) {
      e.target.select()
      document.execCommand('copy')
      this.isAlert = true
      let $this = this
      setTimeout(() => {
        $this.isAlert = false
      }, 1000)
    }
  }
}
</script>

<style>
.alert {
  position: fixed;
  color: green;
  text-align: center;
  font-size: 1.5rem;
  top: 80px;
  left: 50%;
  width: 200px;
  margin-left: -25px;
  background-color: bisque;
}
</style>
