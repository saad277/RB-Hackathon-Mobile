import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = (props) => {
    const {
        dateTime = new Date(),
        setDateTime = () => {},
        setShow = () => {},
        mode = "date",
        display = "default",
        isOpen = false,
    } = props;

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        if (currentDate) {
            setDateTime(currentDate);
        }
    };

    return isOpen ? (
        <DateTimePicker
            display={display}
            testID="team-400"
            value={dateTime}
            mode={mode}
            is24Hour={false}
            display="default"
            onChange={onChange}
        />
    ) : null;
};

export default DatePicker;
