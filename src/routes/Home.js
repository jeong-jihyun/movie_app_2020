import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
// import PropTypes from 'prop-types';
// import BlackHole from './BlackHole';
// const blackHolelLike = [
//   { id: 1, rating: 5, name: 'Kimchi', image: 'https://image.dongascience.com/Photo/2014/12/14185450569701.jpg' },
//   { id: 2, rating: 4.9, name: 'Samgyeopsal', image: 'https://home.postech.ac.kr/wp-content/uploads/2019/07/163-06-1.jpg' },
//   { id: 3, rating: 3, name: 'Bibimbap', image: 'https://lh3.googleusercontent.com/proxy/8hwpzfz_vViT3uwE4rX9-kO2qtS76XiYB7WMoDfHpA3RYiei3OOlJR0faDRyxsI9UxtmC3H2TP8vD1mVpid12OA2FAd0AXNEN3FdLpcFk8_mZZSzSDrPgf9Et75f4E6eiUHkMGcm4g' }
// ];

// BlackHole.propTypes = {
//   name:PropTypes.string.isRequired,
//   picture:PropTypes.string.isRequired,
//   rating:PropTypes.number.isRequired
// }

// function renderFood(dish){
//   return <BlackHole Key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
// }
class Home extends React.Component {
    //return <div className="App"/>;
    //return <div> Hello !!!!</div>;
    /**  something={true} papapapa={['hello', 1,2, 3,4,true]}*/
    // constructor(props){
    //   super(props);
    //   console.log('hello');
    // }
    // state = {
    //   count: 0
    // };
    state = {
      isLoading: true,
      movies: []
    };
    // getMovies 대기 시간이 필요로 함
    getMovies = async () => {
      //const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
      const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
      //console.log(movies);
      this.setState({ movies, isLoading: false });
    }
    // add = () =>{
    //   this.setState(current => ({count: current.count + 1}));
    // };
    // minus = () => {
    //   this.setState(current => ({count: current.count - 1}));
    // };
  
    // componentDidMount(){
    //   console.log('component rendered');
    // }
  
    // componentDidUpdate(){
    //   console.log('I Just updated');
    // }
  
    // componentWillUnmount(){
    //   console.log('Goodbye, cruel world');
    // }
  
    // <div>
    //   <h1>Hello {this.state.count}</h1>
    //   <button onClick={this.add}>Add</button>
    //   <button onClick={this.minus}>Minus</button>
    // </div>
    componentDidMount() {
      // setTimeout(()=> {
      //   this.setState({ isLoading: false});
      // }, 6000);
  
      // https://yts.mx/api/v2/list_movies.json remove
      ///axios.get('https://yts.mx/api/v2/list_movies.json');
  
      this.getMovies();
    }
    render() {
      // console.log('render');
      const { isLoading, movies } = this.state;
  
      return (
        <section className="container">
          {isLoading ? (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>) : (<div className="movies">{
            movies.map((movies) => {
              return <Movie 
                        key={movies.id} 
                        id={movies.id} 
                        year={movies.year} 
                        title={movies.title} 
                        summary={movies.summary} 
                        poster={movies.medium_cover_image} 
                        genres={movies.genres}/>;
            })
          }</div>)
          }
        </section>
      );
    }
  }
export default Home;