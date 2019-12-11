class RunwayHTTP {
  constructor() {
  }

  static getImageData(img) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL("image/png");
    canvas = null;
    return dataURL;
  }

  static async query(port = 8000, data) {

    const url = `http://localhost:${port}/query`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      return await response.json();

    } catch(error) {
      console.error(error);
    }
  }

  static async getData(port = 8000) {

    const url = `http://localhost:${port}/data`;

    try {
      const response = await fetch(url);
      return await response.json();

    } catch(error) {
      console.error(error);
    }
  }

  static async getInfo(port = 8000) {

    const url = `http://localhost:${port}/info`;

    try {
      const response = await fetch(url);
      return await response.json();

    } catch(error) {
      console.error(error);
    }
  }

  static async getError(port = 8000) {

    const url = `http://localhost:${port}/error`;

    try {
      const response = await fetch(url);
      return await response.json();

    } catch(error) {
      console.error(error);
    }
  }

}

module.exports = RunwayHTTP;