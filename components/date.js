import moment from "moment";

export default function Date({ dateString }) {
  const date = moment(dateString).toISOString();
  return (
    <time dateTime={dateString}>{moment(date).format("MMMM d, yyyy")}</time>
  );
}
