import { useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import getDay from "date-fns/getDay";

import { Box } from "../Box";
import { objectCalendar } from "../../data/objectCalendar";
import { daysOfWeek } from "../../data/daysOfWeek";
import { monthList } from "../../data/month";
import { selectCurrentMonth, selectCurrentYear } from "../redux/Date/selector";
import { selectNotes } from "../redux/Notes/notesSelector";
import { isLeapYear } from "../../servises/isLeapYear";
import { dateMatch } from "../../servises/dateMatch";
import { formatedDate } from "../../servises/formatedDate";
import Modal from "../Modal";
import SelectedNote from "../SelectedNote/SelectedNote";
import { List, Item, DayInfo, NoteTitle } from "./Calendar.styled";

const Calendar = () => {
  const currentYear = useSelector(selectCurrentYear);
  const currentMonth = useSelector(selectCurrentMonth);
  const arrMonthAndDays = Object.entries(objectCalendar);
  const currentMonthFromArr = arrMonthAndDays[currentMonth];
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState("");
  const notes = useSelector(selectNotes);

  const handleOpenNote = (id) => {
    const selectedNote = notes.find((item) => item.id === id);
    openModal();
    setSelectedNote(selectedNote);

    return selectedNote;
  };

  const openModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const closeModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const getDetailsOfMonth = (arr) => {
    isLeapYear(currentYear, objectCalendar);
    console.log(isLeapYear(currentYear, objectCalendar));
    console.log(objectCalendar);
    const arrDataMonth = [];

    for (let i = 0; i < arr[1]; i += 1) {
      const weekDay = getDay(new Date(currentYear, currentMonth, i));
      const match = dateMatch(currentYear, currentMonth + 1, i + 1);
      const noteList = notes.filter(
        (item) => item.date === formatedDate(currentYear, currentMonth, i + 1)
      );

      arrDataMonth.push({
        id: nanoid(),
        currentDate: match,
        added: false,
        month: monthList[currentMonth],
        day: i + 1,
        dayOfWeek: daysOfWeek[weekDay],
        notes: noteList,
      });
    }

    const lastDayOfMonth = arrDataMonth[arrDataMonth.length - 1].dayOfWeek;
    const firstDayOfMonth = arrDataMonth[0].dayOfWeek;

    if (firstDayOfMonth !== "Mo") {
      const lastPrevMonthDay =
        currentMonth === 0
          ? arrMonthAndDays[arrMonthAndDays.length - 1][1]
          : arrMonthAndDays[currentMonth - 1][1];

      for (
        let i = lastPrevMonthDay;
        arrDataMonth[0].dayOfWeek !== "Mo";
        i -= 1
      ) {
        const weekDay = getDay(new Date(currentYear, currentMonth - 1, i));
        const noteList = notes.filter(
          (item) => item.date === formatedDate(currentYear, currentMonth - 1, i)
        );

        arrDataMonth.unshift({
          id: nanoid(),
          added: true,
          month: monthList[currentMonth - 1],
          day: i,
          dayOfWeek: daysOfWeek[weekDay - 1],
          notes: noteList,
        });
      }
    }

    if (lastDayOfMonth !== "Su") {
      for (let j = 1; arrDataMonth.length % 7 !== 0; j += 1) {
        const weekDay = getDay(new Date(currentYear, currentMonth + 1, j));

        const dayOfWeek = daysOfWeek[weekDay - 1]
          ? daysOfWeek[weekDay - 1]
          : "Su";
        const noteList = notes.filter(
          (item) => item.date === formatedDate(currentYear, currentMonth + 1, j)
        );

        arrDataMonth.push({
          id: nanoid(),
          added: true,
          month: monthList[currentMonth + 1],
          day: j,
          dayOfWeek,
          notes: noteList,
        });
      }
    }

    return arrDataMonth;
  };

  const month = getDetailsOfMonth(currentMonthFromArr);

  return (
    <Box pt="30px">
      {isOpenModal && (
        <Modal closeModal={closeModal}>
          <SelectedNote note={selectedNote} closeModal={closeModal} />
        </Modal>
      )}
      <List>
        {month.map((item) => (
          <Item
            key={item.id}
            style={{
              backgroundColor: item.added
                ? "#D2E5D7"
                : item.currentDate
                ? "#65ED5A"
                : "#69BEEE",
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <DayInfo>{item.day}</DayInfo>
              <DayInfo>{item.dayOfWeek}</DayInfo>
            </Box>

            {item.notes?.length ? (
              <Box>
                {item.notes.map((item) => (
                  <NoteTitle
                    id={item.id}
                    key={item.id}
                    onClick={() => handleOpenNote(item.id)}
                  >
                    {item.title}
                  </NoteTitle>
                ))}
              </Box>
            ) : (
              <span></span>
            )}
          </Item>
        ))}
      </List>
    </Box>
  );
};

export default Calendar;
