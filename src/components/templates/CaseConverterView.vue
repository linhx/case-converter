<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="normal-case" type="text" class="validate">
          <label for="normal-case">{{ $t('normalCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="camel-case" type="text" class="validate">
          <label for="camel-case">{{ $t('camelCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="snake-case" type="text" class="validate">
          <label for="snake-case">{{ $t('snakeCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="kebab-case" type="text" class="validate">
          <label for="kebab-case">{{ $t('kebabCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="pascal-case" type="text" class="validate">
          <label for="pascal-case">{{ $t('pascalCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="upper-case" type="text" class="validate">
          <label for="upper-case">{{ $t('upperCase') }}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="upper-snake-case" type="text" class="validate">
          <label for="upper-snake-case">{{ $t('upperSnakeCase') }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseConverterView'
}
</script>
