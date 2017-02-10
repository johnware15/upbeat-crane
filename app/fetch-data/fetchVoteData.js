import { voteService } from '../services';

const fetchData = () => {
  return voteService.getBooks()
  .then(res => {
    // console.log(res.data.worksheets[1])
    return res.data
  }).catch((error) => console.log(error));
};

export default fetchData;
