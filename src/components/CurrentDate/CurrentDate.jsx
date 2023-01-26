import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { previousMonth, nextMonth } from "../redux/slice";
import { selectCurrentMonth, selectCurrentYear } from "../redux/selector";
import { monthList } from "../../data/month";
import Button from "../Button";
import { Text } from "./CurrentDate.styled";
import { Box } from "../Box";

const CurrentDate = () => {
  const dispatch = useDispatch();
  const currentMonth = useSelector(selectCurrentMonth);
  const currentYear = useSelector(selectCurrentYear);

  return (
    <Box display="flex" flexDirection="row">
      <Button type="button" onClick={() => dispatch(previousMonth())}>
        <MdKeyboardArrowLeft />
      </Button>
      <Text>
        {monthList[currentMonth]} {currentYear}
      </Text>

      <Button type="button" onClick={() => dispatch(nextMonth())}>
        <MdKeyboardArrowRight />
      </Button>
    </Box>
  );
};

export default CurrentDate;