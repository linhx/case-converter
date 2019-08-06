<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input ref="input" v-model="freeText" @change="onChangeFreeText" id="free-text" type="text" :placeholder="$t('pressEnter')">
          <label for="free-text" class="active">{{ $t('freeText') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="upperCase" id="upper-case" type="text" :placeholder="$t('upperCase')" readonly>
          <label for="upper-case" class="active">{{ $t('upperCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="camelCase" id="camel-case" type="text" :placeholder="$t('camelCase')" readonly>
          <label for="camel-case" class="active">{{ $t('camelCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="snakeCase" id="snake-case" type="text" :placeholder="$t('snakeCase')" readonly>
          <label for="snake-case" class="active">{{ $t('snakeCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="kebabCase" id="kebab-case" type="text" :placeholder="$t('kebabCase')" readonly>
          <label for="kebab-case" class="active">{{ $t('kebabCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="pascalCase" id="pascal-case" type="text" :placeholder="$t('pascalCase')" readonly>
          <label for="pascal-case" class="active">{{ $t('pascalCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="upperSnakeCase" id="upper-snake-case" type="text" :placeholder="$t('upperSnakeCase')" readonly>
          <label for="upper-snake-case" class="active">{{ $t('upperSnakeCase') }}</label>
        </div>
      </div>
    </div>
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
      upperSnakeCase: ''
    }
  },
  methods: {
    onChangeFreeText: debounce(function () {
      // eslint-disable-next-line no-undef
      M.updateTextFields()
      let result = converter.convert(this.freeText)
      this.upperCase = result.upperCase
      this.camelCase = result.camelCase
      this.snakeCase = result.snakeCase
      this.kebabCase = result.kebabCase
      this.pascalCase = result.pascalCase
      this.upperSnakeCase = result.upperSnakeCase
    }, 700)
  },
  mounted () {
    this.$refs.input.focus()
  }
}
</script>
