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
    } else {
      for (let i = 0; i < this.keyMap[hashIndex].length; i++) {
        if (this.keyMap[hashIndex][i][0] === key) {
          console.log("Error : Key already used. Try a new key");
          return undefined;
        }
      }
    }
    this.keyMap[hashIndex].push([key, value]);
  }

  get(key) {
    let hashIndex = this.hash(key);
    if (this.keyMap[hashIndex]) {
      for (let i = 0; i < this.keyMap[hashIndex].length; i++) {
        if (this.keyMap[hashIndex][i][0] === key)
          return this.keyMap[hashIndex][i][1];
      }
    }
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable();

ht.set("shraddha", "Hiya Everyone");
ht.set("tanisha", "Hello");
ht.set("shibbu", "Its cool people");

console.log(ht.get("shraddha"));
console.log(ht.keys());
console.log(ht.values());

ht.set("shraddha","Well Yeah");
console.log(ht.keys());
console.log(ht.values());