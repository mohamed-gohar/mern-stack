import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

const Toast = ({ item }) => {
  const { success } = item;
  const [isOpen, setIsOpen] = useState(true);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  let time = null;
  useEffect(() => {
    time = setTimeout(() => {
      setIsOpen(false);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [isOpen]);

  return (
    <div
      className="p-toast"
      style={{
        position: "fixed",
        top: 90,
        right: 20,
        zIndex: 1000,
        width: "25rem",
      }}
    >
      <div className="toast-message">
        {success && (
          <Alert color="success" isOpen={isOpen}>
            Delete done
          </Alert>
        )}
        {success === false ? (
          <Alert color="danger">Faild to delete</Alert>
        ) : null}
      </div>
    </div>
  );
};

const stateToProps = (state) => ({
  item: state.item,
});

export default connect(stateToProps)(Toast);
