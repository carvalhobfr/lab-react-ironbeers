import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default class MyFilteringComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      beerList: []
    }
    this.filterList = this.filterList.bind(this);
  }

  filterList = (event) => {
    let beerList = this.state.initialItems;
    beerList = beerList.filter((beer) => {
      return beer.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ beerList: beerList });
  }

  componentDidMount = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        console.log("test", response.data);
        this.setState({
          initialItems: response.data,
          beerList: response.data
        });
      });
  }

  //   this.setState({
  //       initialItems: this.props.content,
  //       beerList: this.props.content
  //   })
  // }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" onChange={this.filterList} />
        </form>
        <div>
          {this.state.beerList.map(beer => {
            return (
              <div className="beer-item" key={beer._id}>
                <div>
                  <img className="beer-image" src={beer.image_url} alt="" />
                </div>
                <div className="beer-info">
                  <h4>{beer.name}</h4>
                  <h5>{beer.tagline}</h5>
                  <p>
                    <strong>Created by: </strong>
                    {beer.contributed_by}
                  </p>
                  <p>
                    <Link to={`/beers/${beer._id}`}>Details</Link>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};