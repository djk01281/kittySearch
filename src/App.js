console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        this.searchResult.setState({loading: true, cats: this.data, noSearch: true});

        api.fetchCats(keyword).then(({ data }) => {
          this.setState(data);
          this.searchResult.setState({loading: false, cats: this.data, noSearch: false});
        });
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: {loading: false, cats:this.data, noSearch: true},
      onClick: async (image) => {
          const id = await api.fetchID(image.id);
          this.imageInfo.setState({
          visible: true,
          image,
          id
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      },
      handleClick: api.fetchID
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
  }
}
