import React, { Component } from "react";

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: []
    };

    this.searchByName = this.searchByName.bind(this);
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          filteredData: data.results,
        })
      })
      .catch(console.log)
  }

  sortBy = () => {
    var e = document.getElementById("sortfilter");
    var selected = e.options[e.selectedIndex].value;

    // fetch(`https://rickandmortyapi.com/api/character?sort=${selected}`)
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({
    //     filteredData: data.results,
    //   })
    // })
    // .catch(console.log)
    if (selected === "asc") {
      let filteredData = [...this.state.filteredData];
      filteredData.sort(function (a, b) {
        return a.id - b.id;
      });
      this.setState({ filteredData });
    } else {
      let filteredData = [...this.state.filteredData];
      filteredData.sort(function (a, b) {
        return b.id - a.id;
      });
      this.setState({ filteredData: filteredData });
    }
  };

  searchByName(e) {
    fetch(`https://rickandmortyapi.com/api/character?name=${e.target.value}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          filteredData: data.results,
        })
      })
      .catch(console.log)
  }

  filterGender = gender => {
    fetch(`https://rickandmortyapi.com/api/character?gender=${gender}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          filteredData: data.results,
        })
      })
      .catch(console.log)
  }

  filterSpecies = species => {
    fetch(`https://rickandmortyapi.com/api/character?species=${species}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          filteredData: data.results,
        })
      })
      .catch(console.log)
  }

  filterOrigin = origin => {
    fetch(`https://rickandmortyapi.com/api/character?origin.name=${origin}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          filteredData: data.results,
        })
      })
      .catch(console.log)
  }

  render() {
    const { filteredData } = this.state;
    const persons = filteredData.map((item, i) => (
      <article className="characterCard__Wrapper-sc-1ejywvi-0 lkWhZH" key={(item.id).toString()}>
        <div className="characterCard__ImgWrapper-sc-1ejywvi-1 eUyUcB">
          <div className="card-image">
            <img src={item.image} alt="Crab Spider"></img>
          </div>
          <div className="characterCard__Title-sc-1ejywvi-3 dfWCUu">
            <h2 className="characterCard__Name-sc-1ejywvi-4 ieUvkm">{item.name}</h2>
            <p className="characterCard__Description-sc-1ejywvi-5 dSyDU">id: {item.id} - created 2 years ago</p>
          </div>
        </div>
        <div className="characterCard__InfoWrapper-sc-1ejywvi-2 XgbIp">
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
            <span>STATUS</span>
            <p>{item.status}</p>
          </div>
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
            <span>SPECIES</span>
            <p>{item.species}</p>
          </div>
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
            <span>GENDER</span>
            <p>{item.gender}</p>
          </div>
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
            <span>ORIGIN</span>
            <p>{item.origin.name}</p>
          </div>
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 jCIRLJ">
            <span>LAST LOCATION</span>
            <p>{item.location.name}</p>
          </div>
        </div>
      </article>

    ));

    return (
      <div className="row">
        <div className="side">
          <h2>Filters</h2>
          <h3>Species:</h3>
          <div className="fakeimg" >
            <div>
              <input type="radio" id="Human" name="species" value="Human" onClick={() => this.filterSpecies("Human")}/>
              <label htmlFor="Human">Human</label>
            </div>
            <div>
              <input type="radio" id="Mytholog" name="species" value="Mytholog" onClick={() => this.filterSpecies("Mytholog")}/>
              <label htmlFor="Mytholog">Mytholog</label>
            </div>
            <div>
              <input type="radio" id="Other" name="species" value="Other" onClick={() => this.filterSpecies("Other Species")}/>
              <label htmlFor="Other">Other Species</label>
            </div>
          </div>
          <h3>Gender:</h3>
          <div className="fakeimg" >
            <div>
              <input type="radio" id="male" name="gender" value="male" onClick={() => this.filterGender("Male")}/>
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" onClick={() => this.filterGender("Female")}/>
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <h3>Origin:</h3>
          <div className="fakeimg" >
            <div>
              <input type="radio" id="Unknown" name="origin" value="Unknown" onClick={() => this.filterOrigin("Unknown")}/>
              <label htmlFor="Unknown">Unknown</label>
            </div>
            <div>
              <input type="radio" id="Post-Apocalyptic" name="origin" value="Post-Apocalyptic Earth" onClick={() => this.filterOrigin("Post-Apocalyptic Earth")}/>
              <label htmlFor="Post-Apocalyptic">Post-Apocalyptic Earth</label>
            </div>
            <div>
              <input type="radio" id="Nuptia4" name="origin" value="Nuptia4" onClick={() => this.filterOrigin("Nuptia4")}/>
              <label htmlFor="Nuptia4">Nuptia4</label>
            </div>
            <div>
              <input type="radio" id="OtherOrigin" name="origin" value="Other Origin" onClick={() => this.filterOrigin("Other Origin")}/>
              <label htmlFor="OtherOrigin">Other Origin</label>
            </div>
          </div>
        </div>
        <div className="main">
          <h2>Selected Filters</h2>
          <h5>show filters</h5>
          <div className="fakeimg" >
            <div className="search-sort" >
              <div className="search-data">
                <div>
                  <label htmlFor="OtherOrigin">Search by Name</label>
                </div>
                <input type="text" id="OtherOrigin" className="input" onChange={this.searchByName} placeholder="Search by Name" />
              </div>
              <div className="sort-data">
                <select id="sortfilter" onChange={this.sortBy}>
                  <option value="asc">Ascending</option>
                  <option value="des">Descending</option>
                </select>
              </div>
            </div>
          </div>
          <div className="fakeimg1" >
            <section className="showcase__Wrapper-sc-1x4wk68-0 hlovws">
              <div className="showcase__Inner-sc-1x4wk68-1 kJKTWD">{persons}
                </div>
            </section>
          </div>
        </div>
     </div>

    );
  }
}


export default SearchFilter;
