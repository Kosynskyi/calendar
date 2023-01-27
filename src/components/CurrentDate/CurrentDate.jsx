import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { previousMonth, nextMonth } from "../redux/Date/slice";
import { selectCurrentMonth, selectCurrentYear } from "../redux/Date/selector";
import { monthList } from "../../data/month";
import { Box } from "../Box";
import { Text, StyledButton } from "./CurrentDate.styled";

const CurrentDate = () => {
  const dispatch = useDispatch();
  const currentMonth = useSelector(selectCurrentMonth);
  const currentYear = useSelector(selectCurrentYear);

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <StyledButton type="button" onClick={() => dispatch(previousMonth())}>
        <MdKeyboardArrowLeft size={30} />
      </StyledButton>
      <Text>
        {monthList[currentMonth]} {currentYear}
      </Text>

      <StyledButton type="button" onClick={() => dispatch(nextMonth())}>
        <MdKeyboardArrowRight size={30} />
      </StyledButton>
    </Box>
  );
};

export default CurrentDate;
