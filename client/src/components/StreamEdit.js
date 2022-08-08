import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editStream, fetchStream } from "../actions";
import StreamForm from "./StreamForm";
import { useSelector } from "react-redux";

function StreamEdit(props) {
  const [loading, setLoading] = useState(true);

  const stream = useSelector(state => state.stream);

  const { id } = useParams();

  useEffect(() => {
    props.fetchStream(id);
    setLoading(false);
  }, []);
  const onSubmit = formValues => {
    props.editStream(id, formValues);
  };

  if (loading) {
    return "Loading";
  }
  return (
    <div>
      <h3>Edit Stream:</h3>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={{
          title: stream.title,
          description: stream.description,
        }}
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
