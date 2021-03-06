// 필요한 네트워크 처리

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;

    //promise를 쓰니까 async
    // const response = await fetch(
    //   `/videos?part=snippet&chart=mostPopular&maxResults=25&part=statistics&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    // const response = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
