import React from "react";
import { connect } from "react-redux";

const Header = () => <h1>Hello I'm Header!</h1>;

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoadinggg:isLoading,
  imagesss:images,
  errorrr:error,
});

//connect need 2 argument, 1st is mapStateToProps, 2nd is mapDispatchToProps
export default connect(mapStateToProps, null)(Header);
