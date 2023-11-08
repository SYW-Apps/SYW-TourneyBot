import moment, { Moment } from "moment";
import { useAccount } from "../authorization/account";

export function convertMoment(moment: Moment): Moment {
    const { timeZone } = useAccount();

    if (!timeZone) return moment;

    return moment.tz(timeZone);
}

export function formatDateInMessage(message: string, format?: string): string {
    var index;
    if ((index = message.indexOf('date{')) < 0) return message;

    const dateIdentifyingPart = message.substring(index, message.indexOf('}', index) + 1);

    const dateStringPart = dateIdentifyingPart.substring(5, dateIdentifyingPart.length - 1);

    const convertedDatePart = convertMoment(moment(dateStringPart));

    return message.replace(dateIdentifyingPart, convertedDatePart.format(format || 'dddd yyyy-MM-DD HH:mm'));
}