import React, { useEffect } from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StreamShow = props => {
  const stream = useSelector(state => state.stream);

  const videoRef = React.createRef();

  const { id } = useParams();

  useEffect(() => {
    props.fetchStream(id);
    player();
  }, []);

  const player = () => {
    let player;

    player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
  };

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls={true} />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
