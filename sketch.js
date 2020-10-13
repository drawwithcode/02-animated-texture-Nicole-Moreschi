let nuovoModulo = [];

function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 35; i < windowWidth; i += 35) {
    addModulo();
  }
}

function draw() {
  background(50);
  for (let i = 0; i < nuovoModulo.length; i++) {
    nuovoModulo[i].run();
  }
push();
noStroke();
fill(0);
rect(width/2-70, height-70, 140, 35);
pop();

push();
textAlign(CENTER);
textSize(12);
noStroke();
fill(255);
text('Click to change color', width/2, height-50)
pop();
}

function mouseClicked() {
  addModulo();
}

function addModulo() {
  let d = 35;
  const rgb=random(255);
  const col1 = color(rgb);
  const red=random(255), green=random(255), blue=random(255);
  const col2 = color(red,green,blue);
  for (let x = -d; x < windowWidth; x += d) {
    for (let y = -d; y < windowHeight; y += d) {
      // const x = d;
      // const y = d;
      let coloreModulo;
      if (x % 2 == 0 && y % 2 == 0 || x % 2 != 0 && y % 2 != 0) {
        coloreModulo = col1
      } else {
        coloreModulo = col2
      }
      const parametri = new Moduli(x, y, d, d, coloreModulo)
      nuovoModulo.push(parametri);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Moduli {
  constructor(temp_x, temp_y, temp_w, temp_h, temp_color) {
    this.x = temp_x;
    this.y = temp_y;
    this.w = temp_w;
    this.h = temp_h;
    this.color = temp_color;
  }

  display() {
    push();
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  updatePosition() {
    if (this.x % 2 == 0 && this.y % 2 == 0 || this.x % 2 != 0 && this.y % 2 != 0) {
      this.x += 35
    } else {
      this.x -= 35
    }
  }


  run() {
    this.updatePosition();
    this.display();
  }
}
