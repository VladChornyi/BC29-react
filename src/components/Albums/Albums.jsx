import { Component } from 'react';
import getAlbums from '../../helpers/Api';
import { ButtonMore } from '../ButtonMore/ButtonMore';

export class Albums extends Component {
  state = {
    albums: [],
    currentPage: 1,
    errorMessage: '',
  };

  async componentDidMount() {
    try {
      const data = await getAlbums();

      this.setState({ albums: data, errorMessage: '' });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  }

  handleArraySlice = () => {
    const { albums, currentPage } = this.state;

    const startIndex = 0;
    const endIndex = (currentPage - 1) * 10 + 10;
    return albums.slice(startIndex, endIndex);
  };
  handlePageChange = () => {
    this.setState(prevSt => ({
      currentPage: prevSt.currentPage + 1,
    }));
  };

  render() {
    return (
      <>
        <p>{this.state.currentPage}</p>
        <ul>
          {this.handleArraySlice().map(album => (
            <li key={album.id}>
              album №{album.id}: {album.title}
            </li>
          ))}
        </ul>
        <ButtonMore
          isDisabled={this.state.currentPage * 10 >= this.state.albums.length}
          text={'Load more'}
          onClick={this.handlePageChange}
        />
      </>
    );
  }
}
