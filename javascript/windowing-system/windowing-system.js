// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

// export class ProgramWindow {
//   screenSize = new Size(800, 600);
//   size = new Size();
//   position = new Position();

//   resize(Size) {
//     if (Size.width < 1) {
//       Size.width = 1;
//     }
//     if (Size.height < 1) {
//       Size.height = 1;
//     }

//     Size();
//   }
// }

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(newSize) {
    const desiredWidth = Math.max(1, newSize.width);
    const maxWidth = this.screenSize.width - this.position.x;
    const newWidth = Math.min(desiredWidth, maxWidth);

    const desiredHeight = Math.max(1, newSize.height);
    const maxHeight = this.screenSize.height - this.position.y;
    const newHeight = Math.min(desiredHeight, maxHeight);

    this.size.resize(newWidth, newHeight);
  }
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position = new Position(newX, newY);
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}

const programWindow = new ProgramWindow();
changeWindow(programWindow);

console.log(programWindow.size.width);
