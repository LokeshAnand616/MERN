import { parseISO, formatDistanceToNow } from "date-fns";

function TimePeriod({ time }) {
    console.log("Received time in TimePeriod:", time); // Debugging log

    if (!time) {
        console.warn("TimePeriod received an undefined or invalid time:", time);
        return <p>No time available</p>;
    }

    let parsed;
    try {
        parsed = parseISO(time);
    } catch (error) {
        console.error("Error parsing time:", error);
        return <p>Invalid date</p>;
    }

    const timeAgo = formatDistanceToNow(parsed);
    return <p>{`${timeAgo} ago`}</p>;
}

export default TimePeriod;
