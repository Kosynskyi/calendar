import { useSelector, useDispatch } from "react-redux";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { selectCurrentYear, selectCurrentMonth } from "../redux/selector";
import { chosenMonth } from "../redux/slice";
import { previousYear, nextYear } from "../redux/slice";
import { objectCalendar } from "../../data/objectCalendar";
import { Box } from "../Box";
import Button from "../Button";
import { monthList } from "../../data/month";
import { List, Item, Month, Year } from "./InputCalendar.styled";

const InputCalendar = () => {
  const currentYear = useSelector(selectCurrentYear);
  const currentMonth = useSelector(selectCurrentMonth);

  const dispatch = useDispatch();
  const checkMonth = ({ currentTarget }) => {
    dispatch(chosenMonth(Number(currentTarget.id)));
  };

  if (currentYear % 4 === 0) {
    objectCalendar.February = 29;
  } else {
    objectCalendar.February = 28;
  }

  const comparisonMonth = new Date().getMonth() === currentMonth;
  console.log(comparisonMonth);
  const comparisonYear = new Date().getFullYear() === currentYear;
  console.log(comparisonYear);

  return (
    <Box ml="20px" display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mb="20px"
      >
        <Button type="button">
          <MdKeyboardArrowLeft onClick={() => dispatch(previousYear())} />
        </Button>
        <Year>{currentYear}</Year>

        <Button type="button">
          <MdKeyboardArrowRight onClick={() => dispatch(nextYear())} />
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
                  : "blue",
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
