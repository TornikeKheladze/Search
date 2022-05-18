import { Component } from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import youtube from "./apis/youtube";
import VideoDetail from "./components/VideoDetail";

class VideoApp extends Component {
  state = { videos: [], currentVideo: null };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      currentVideo: response.data.items[0],
    });
  };

  onVideoClick = (curVideo) => {
    this.setState({ currentVideo: curVideo });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {this.state.currentVideo ? (
                <VideoDetail video={this.state.currentVideo} />
              ) : null}
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                videoClicked={this.onVideoClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoApp;
