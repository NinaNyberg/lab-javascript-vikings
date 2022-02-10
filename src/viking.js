// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    // let randomS =
    //   this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // let randomV =
    //   this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // let saxonDamage = randomS.receiveDamage(randomV.strength);
    // if (randomS.health <= 0) this.saxonArmy.pop(randomS);
    // return saxonDamage;
    return this.attacK(0);
  }

  saxonAttack() {
    // let randomS =
    //   this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    // let randomV =
    //   this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // let vikingDamage = randomV.receiveDamage(randomS.strength);
    // if (randomV.health <= 0)
    //   this.vikingArmy = this.vikingArmy.filter((item) => item !== randomV);
    // // this.vikingArmy.pop(randomV);
    // return vikingDamage;
    return this.attacK(1);
  }

  // generic function unfinished

  attacK(defender) {
    let attacker = (defender + 1) % 2;
    let random = [];
    random.push(
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    );
    random.push(
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    );

    let randomSoldierDamage = random[defender].receiveDamage(
      random[attacker].strength
    );
    if (random[defender].health <= 0) {
      if (defender === 0)
        this.saxonArmy = this.saxonArmy.filter(
          (item) => item !== random[defender]
        );
      else
        this.vikingArmy = this.vikingArmy.filter(
          (item) => item !== random[defender]
        );
    }
    return randomSoldierDamage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
