class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);
    this.data = data;

    // handleClick(this.data.image.id).then(this.render);
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url } = this.data.image;
      const { temperament, origin } = this.data.id.data;
      this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <button class="close">x</button>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
              <div>full: ${JSON.stringify(this.data.id)}</div>
            </div>
          </div>`;
      this.$imageInfo.style.display = "block";
      this.$imageInfo.querySelector(".close").addEventListener("click", () => {
        this.setState({ visible: false, image: this.data.image });
      });
      this.$imageInfo.addEventListener("click", (e) => {
        if (!e.target.closest(".content-wrapper")) {
          this.setState({ visible: false, image: this.data.image });
        }
      });
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
