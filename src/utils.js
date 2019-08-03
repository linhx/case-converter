class Debounce {
  timeOut
  constructor (func, time) {
    this.func = func
    this.time = time
  }

  call (context, args) {
    let $this = this

    if (this.timeOut) clearTimeout(this.timeOut)
    this.timeOut = setTimeout(function () {
      $this.timeOut = undefined
      $this.func.apply(context, args)
    }, this.time)
  }
}

export let debounce = function (func, time) {
  let debounce = new Debounce(func, time)
  return function () {
    let context = this
    let args = arguments
    debounce.call(context, args)
  }
}
