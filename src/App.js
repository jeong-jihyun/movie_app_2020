import React from 'react';
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
class App extends React.Component {
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
  state ={
    isLoading : true,
    movies:[]
  };
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
componentDidMount(){
  setTimeout(()=> {
    this.setState({ isLoading: false});
  }, 6000);
}
  render() {
    console.log('render');
    const { isLoading } = this.state;

    return (
      <div>{ isLoading ? 'Loading...' : 'We are ready'}</div>
    );
  }
}

export default App;
