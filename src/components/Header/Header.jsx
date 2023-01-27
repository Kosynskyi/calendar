import React, { useState } from "react";
import InputCalendar from "../InputCalendar/InputCalendar";
import { FiPlus } from "react-icons/fi";
import { FcCalendar } from "react-icons/fc";
import CurrentDate from "../CurrentDate/CurrentDate";
import { Box } from "../Box";
import Modal from "../Modal";
import FormAddNote from "../FormAddNote/FormAddNote";
import { StyledButton, ButtonCalendar } from "./Header.styled";

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
      alignItems="center"
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

      <StyledButton type="button" onClick={openModalAddForm}>
        <FiPlus size={30} />
      </StyledButton>
      <Box display="flex" flexDirection="row">
        <CurrentDate />
        <ButtonCalendar
          type="button"
          style={{ marginLeft: "20px" }}
          onClick={openModalChoseDate}
        >
          <FcCalendar size={60} />
        </ButtonCalendar>
      </Box>
    </Box>
  );
};

export default Header;
