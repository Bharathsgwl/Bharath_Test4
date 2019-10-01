import React from "react";

const hoc = () => Component => {
  class ScreenHoc extends React.Component {
    state = {
      list: {},
      mainPath: false
    };
    handleOnSubmit = e => {
      e.preventDefault();
      let { list } = this.state;
      console.log(this.state.list);
    };

    handleFieldChange = event => {
      let { list } = this.state;
      const { name, value } = event.target;
      console.log(name, value);
      this.setState({
        list: {
          ...list,
          [name]: value
        }
      });
    };

    componentDidMount() {
      console.log(this.props.match.params.path, "pathname");
      this.handleOnRoute();
    }

    handleOnRoute = () => {
      const { mainPath } = this.state;
      let pathname = this.props.match.params.path;
      // const {match}=this.props;
      // const {params}=match;
      let config = require(`../../UIConfig/ScreenSpecification/${pathname}`).default;
    
      this.setState({
        mainPath: true,
        config
      });
    };

    render() {
      const { handleOnSubmit, handleFieldChange } = this;
      console.log(this.state.config, "eiwdfwdfq8");

      return (
        <div>
       {this.state.mainPath?
       <Component
         handleOnSubmit={handleOnSubmit}
         config={this.state.config}
         handleFieldChange={handleFieldChange}
         {...this.props}
       />
       :null}
       </div>
      );
    }
  }
  return ScreenHoc;
};

export default hoc;
