import React from 'react';
import './searchbox.css';
import Card from 'react-bootstrap/Card';
import { ControlledTabs } from "./ControlledTabs";

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      selectedRegions: null,
      selectedStates: null,
      selectedPrograms: null,
      selectedDegrees: null,
      selectedProgramDegree: null,
      selectedOwnership: null,
      selectedSize: null,
      missingDegree: null,
      results: {"_fields": ["id", "school.name", "school.school_url", "school.city", "school.state", "school.price_calculator_url", "latest.admissions.admission_rate.overall", "latest.student.size", "latest.cost.attendance.academic_year", "latest.cost.attendance.program_year"]},
      perPage: {"per_page": 21},
      currentPage: {"page": 0},
      operating: {"school.operating": 1}
    }
    this.programDegree = false;
    this.onNameChange = this.onNameChange.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fixDuplicates = this.fixDuplicates.bind(this); 
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onDegreeChange = this.onDegreeChange.bind(this);
    this.onProgramChange = this.onProgramChange.bind(this);
    this.handleprogramDegree = this.handleprogramDegree.bind(this);
    this.setStateAsync = this.setStateAsync.bind(this);
    this.onOwnershipChange = this.onOwnershipChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
  }

  async onNameChange(value) {
    console.log(value);
    await this.setStateAsync({
      name: {"school.name": value}
    });
    console.log(this.state);
    let store = JSON.stringify(this.state);
    console.log(store);
    sessionStorage.setItem(`SearchboxState${this.props.activePage}`, store);
    console.log(sessionStorage);
    this.props.searchSchools(this.state);
     
  }

  fixDuplicates(possibleArr) {
    if (possibleArr.length > 1) {
      let prop = Object.getOwnPropertyNames(possibleArr[0]);
      let values = possibleArr.flatMap(element => Object.values(element));
      return Object.assign({}, {[prop]: values});
    }
     return possibleArr.shift();
  }

  setSelected(selected, key, stateObject) {
    let state = selected.map(obj => Object.assign({}, {[key]: obj.value}));
    state = this.fixDuplicates(state);
    console.log(state);
    this.setState({
      [stateObject]: state
    }, () => console.log(this.state));
  }

  onRegionChange(selected) {
    this.setSelected(selected, "school.region_id", "selectedRegions");
  }

  onStateChange(selected) {
    this.setSelected(selected, "school.state_fips", "selectedStates");
  }

  onProgramChange(selected) {
    let string = selected[0].value;
    this.setState({
    selectedPrograms: string
    }, () => console.log(this.state));
    this.programDegree = true;
  }

  onDegreeChange(selected) {
    console.log(selected);
    let string = selected[0].value;
    this.setState({
      selectedDegrees: string,
      missingDegree: null
    }, () => console.log(this.state));
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async handleprogramDegree(event) {
    let string = this.state.selectedDegrees;
    string += this.state.selectedPrograms;
    let obj = Object.assign({}, {[string]: 1});
    console.log(obj);
    await this.setStateAsync({
      selectedProgramDegree: obj,
      selectedDegrees: null,
      selectedPrograms: null,
      missingDegree: null
    });
    let store = JSON.stringify(this.state);
    sessionStorage.setItem(`SearchboxState${this.props.activePage}`, store);
    console.log(sessionStorage);
    this.props.searchSchools(this.state);
    }  

  onOwnershipChange(selected) {
    this.setSelected(selected, "school.ownership", "selectedOwnership");
  }

  onSizeChange(selected) {
    this.setSelected(selected, "latest.student.size__range", "selectedSize")
  }

  handleSearch(event) {
    if (this.state.selectedPrograms && !this.state.selectedDegrees) {
      this.setState({
        missingDegree: true
      });
      return;
    } else if (this.state.selectedPrograms && this.state.selectedDegrees) {
      this.handleprogramDegree(event);
      event.preventDefault();
    } else {
      let store = JSON.stringify(this.state);
   
      sessionStorage.setItem(`SearchboxState${this.props.activePage}`, store);
      console.log(sessionStorage);
      this.props.searchSchools(this.state);
      //event.preventDefault();
    }
  }
 
  render() {
    return (
      <div className="Searchbox" id="position">
        <Card className="col-lg-6 box" >
          <ControlledTabs 
            onNameChange={this.onNameChange}
            selectedRegions={this.state.selectedRegions} 
            onRegionChange={this.onRegionChange}
            selectedStates={this.state.selectedStates} 
            onStateChange={this.onStateChange}
            selectedPrograms={this.state.selectedPrograms} 
            onProgramChange={this.onProgramChange}
            missingDegree={this.state.missingDegree}
            programDegree={this.programDegree}
            selectedDegrees={this.state.selectedDegrees} 
            onDegreeChange={this.onDegreeChange}
            selectedOwnership={this.state.selectedOwnership} 
            onOwnershipChange={this.onOwnershipChange}
            selectedSize={this.state.selectedSize} 
            onSizeChange={this.onSizeChange}
            onClick={this.handleSearch}
          />
        </Card>
        </div>
    );
  }
}

export default Searchbox;

/*

 let store = JSON.stringify(this.state);
    console.log(store);
    let backToObject = JSON.parse(store);
    console.log(backToObject);
<div className="SearchUrban">
                  <Card.Text>
        Select the size of your ideal college town.
              </Card.Text>
              <Select multi options={urbanOptions} onChange={(selected) => this.setSelected(selected, "school.degree_urbanization", "selectedUrbans")} />
                </div>
            */