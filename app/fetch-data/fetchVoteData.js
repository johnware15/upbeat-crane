import { voteService } from '../services';

const fetchData = () => {
  return voteService.getBooks()
  .then(res => {
    return res.data
  }).catch((error) => console.log(error));
};

export default fetchData;
