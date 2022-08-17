class DRArray {
  constructor(last="", first = "") {
    console.log('testing')
    this.last = last 
    this.first = first
  }
  getFullName() {
    return this.last + ' ' + this.first
  }
}

module.exports = DRArray