import React, { useState } from "react";
import InputCalendar from "../InputCalendar/InputCalendar";
import { FiPlus } from "react-icons/fi";
import { FcCalendar } from "react-icons/fc";
import CurrentDate from "../CurrentDate/CurrentDate";
import Button from "../Button/Button";
import { Box } from "../Box";
import Modal from "../Modal";
import FormAddNote from "../FormAddNote/FormAddNote";

const Header = () => {
  const [addFormIsOpenModal, setAddFormIsOpenModal] = useState(false);
  const [choseDateIsOpenModal, setChoseDateIsOpenModal] = useState(false);

  const openModalAddForm = () => {
    setAddFormIsOpenModal((prev) => !prev);
  };

  const closeModalAddForm = () => {
    setAddFormIsOpenModal((prev) => !prev);
  };

  const openModalChoseDate = () => {
    setChoseDateIsOpenModal((prev) => !prev);
  };

  const closeModalChoseDate = () => {
    setChoseDateIsOpenModal((prev) => !prev);
  };

  return (
    <Box
      as="header"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      {addFormIsOpenModal && (
        <Modal closeModal={closeModalAddForm}>
          <FormAddNote closeModal={closeModalAddForm} />
        </Modal>
      )}

      {choseDateIsOpenModal && (
        <Modal closeModal={closeModalChoseDate}>
          <InputCalendar closeModal={closeModalChoseDate} />
        </Modal>
      )}

      <Button type="button" onClick={openModalAddForm}>
        <FiPlus />
      </Button>
      <Box display="flex" flexDirection="row">
        <CurrentDate />
        <Button
          type="button"
          style={{ marginLeft: "20px" }}
          onClick={openModalChoseDate}
        >
          <FcCalendar />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
