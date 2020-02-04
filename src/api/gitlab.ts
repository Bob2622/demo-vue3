export default class {
  private base: string = ''

  get TEST () {
    return this.base + '/a/b'
  }
}
