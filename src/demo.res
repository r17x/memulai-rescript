module Int = {
  let add = (a, b) => a + b
  let sub = (a, b) => a - b
  let mul = (a, b) => a * b
  let div = (a, b) => a / b
  let toString = Belt.Int.toString
}

module Float = {
  let add = (a, b) => a +. b
  let sub = (a, b) => a -. b
  let mul = (a, b) => a *. b
  let div = (a, b) => a /. b
  let toString = Belt.Float.toString
}

