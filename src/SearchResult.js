class SearchResult {
    $searchResult = null;
    data = null;
    onClick = null;
    noSearch = true;
  
    constructor({ $target, initialData, onClick }) {
      this.$searchResult = document.createElement("div");
      this.$searchResult.className = "SearchResult";
      $target.appendChild(this.$searchResult);
  
      this.data = initialData;
      this.onClick = onClick;
      this.render();
    }
  
    setState(nextData) {
      this.data = nextData;
      this.render();
    }
  
    render() {
      if(this.data.loading === true){this.$searchResult.innerHTML = "Loading"}
      else{
      this.$searchResult.innerHTML = this.data.cats
        .map(
          cat => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
        )
        .join("");
  
      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(this.data.cats[index]);
        });
      });
  
      if (this.data.cats.length === 0 && this.data.noSearch === false){
        this.$searchResult.innerHTML = "Not Found"
      }
    }
  }
  }
  