import moment from "moment/moment"

const dateformat = date => {
  return moment(date).format('DD/MM/YYYY');
}

export default dateformat