import { useSelector, useDispatch } from "react-redux";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { selectCurrentYear, selectCurrentMonth } from "../redux/Date/selector";
import { chosenMonth } from "../redux/Date/slice";
import { previousYear, nextYear } from "../redux/Date/slice";
import { objectCalendar } from "../../data/objectCalendar";
import { Box } from "../Box";
import { monthList } from "../../data/month";
import { List, Item, Month, Year, Button } from "./InputCalendar.styled";

const InputCalendar = ({ closeModal }) => {
  const currentYear = useSelector(selectCurrentYear);
  const currentMonth = useSelector(selectCurrentMonth);
  const comparisonMonth = new Date().getMonth() === currentMonth;
  const comparisonYear = new Date().getFullYear() === currentYear;

  const dispatch = useDispatch();
  const checkMonth = ({ currentTarget }) => {
    dispatch(chosenMonth(Number(currentTarget.id)));
    closeModal();
  };

  if (currentYear % 4 === 0) {
    objectCalendar.February = 29;
  } else {
    objectCalendar.February = 28;
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mb="20px"
      >
        <Button type="button">
          <MdKeyboardArrowLeft
            size={30}
            onClick={() => dispatch(previousYear())}
          />
        </Button>
        <Year>{currentYear}</Year>

        <Button type="button">
          <MdKeyboardArrowRight
            size={30}
            onClick={() => dispatch(nextYear())}
          />
        </Button>
      </Box>

      <List>
        {monthList.map((item, index) => (
          <Item
            id={index}
            key={item}
            style={{
              backgroundColor:
                comparisonMonth && comparisonYear && index === currentMonth
                  ? "yellow"
                  : "#69BEEE",
            }}
            onClick={checkMonth}
          >
            <Month>{item}</Month>
          </Item>
        ))}
      </List>
    </Box>
  );
};

export default InputCalendar;
