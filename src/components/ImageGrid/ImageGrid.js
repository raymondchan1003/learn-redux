import React, { Component } from "react";
import { loadImages } from "../../actions";
import { connect, useSelector, useDispatch } from "react-redux";

import "./style.css";

/* hook only can be use in functional component
const isLoading = useSelector((state) => state.isLoading);
const images = useSelector((state) => state.images);
const error = useSelector((state) => state.error);
const dispatch = useDispatch();
*/

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImagess();
  }

  render() {
    const { imagesss, error } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {imagesss.map((image) => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
          <a onClick={this.props.loadImagess}>Load Images</a>
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoadinggg: isLoading,
  imagesss: images,
  errorrr: error,
});

const mapDispatchToProps = (dispatch) => ({
  loadImagess: () => dispatch(loadImages()),
});

//connect need 2 argument, 1st is mapStateToProps, 2nd is mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
