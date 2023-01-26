import React, { useState } from "react";
// import InputCalendar from "../InputCalendar/InputCalendar";
import { FiPlus } from "react-icons/fi";
import { FcCalendar } from "react-icons/fc";
import CurrentDate from "../CurrentDate/CurrentDate";
import Button from "../Button/Button";
import { Box } from "../Box";
import Modal from "../Modal";
import FormAddNote from "../FormAddNote/FormAddNote";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const closeModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <Box
      as="header"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      {isOpenModal && (
        <Modal closeModal={closeModal}>
          <FormAddNote closeModal={closeModal} />
        </Modal>
      )}

      <Button type="button" onClick={openModal}>
        <FiPlus />
      </Button>
      <Box display="flex" flexDirection="row">
        <CurrentDate />
        {/* <InputCalendar /> */}
        <Button type="button" style={{ marginLeft: "20px" }}>
          <FcCalendar />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
