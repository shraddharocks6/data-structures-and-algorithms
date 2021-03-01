class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let hashIndex = this.hash(key);
    if (!this.keyMap[hashIndex]) {
      this.keyMap[hashIndex] = [];
    }
    this.keyMap[hashIndex].push([key, value]);
  }

  get(key) {
    let hashIndex = this.hash(key);
    if (this.keyMap[hashIndex]) {
        for(let i = 0; i<this.keyMap[hashIndex].length;i++){
            if(this.keyMap[hashIndex][i][0] === key) return this.keyMap[hashIndex][i][1];
        }
    }
  }
}

let ht = new HashTable();

ht.set("shraddha", "Hiya Everyone");
ht.set("tanisha", "Hello");
ht.set("shibbu", "Its cool people");

console.log(ht.get("shraddha"));
