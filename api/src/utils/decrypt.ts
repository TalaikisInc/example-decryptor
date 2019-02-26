import letters from './letters'

export default (input: string, cb: Function) => {
  const out: string[] = []
  input.split(' ').map((val) => {
    let n = parseInt(val)
    let nonSpace = (n > 26 && n % 27 === 0) || n <= 26
    while (n > 26) {
      n = n / 27
    }
    out.push(nonSpace && typeof letters[n] === 'string' ? letters[n] : ' ')
  })
  cb(out.join(''))
}
