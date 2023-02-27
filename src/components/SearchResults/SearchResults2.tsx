import styles from './SearchResults.module.css'
import {IMPRNDetails} from '../Interfaces/IMPRNDetails';
import DummyValidMPRNResponse from '../../DummyResponses/DummyValidMPRNResponse';

const SearchResults = (props: {mprnDetails: IMPRNDetails | undefined}) => {
//const SearchResults = () => {

  //const {mprns, mprnSearch} = props;

  const searchedMPRNDetails: IMPRNDetails = DummyValidMPRNResponse;

    return (
        <div className={`${styles['mprnSearch-results']}`}>
          <table>
            <thead>
              <tr>
                <th><span>MPRN Search</span></th>
                <th><span>Provider</span></th>
                <th><span>Meter Serial Number</span></th>
                <th><span>Consumption</span></th>
                <th><span>Postcode</span></th>
              </tr>
            </thead>
                <tbody>
                  <tr>
                    <td>{searchedMPRNDetails.mprn}</td>
                    <td>{searchedMPRNDetails.provider}</td>
                    <td>{searchedMPRNDetails.meter_serial_number}</td>
                    <td>{searchedMPRNDetails.consumption}</td>
                    <td>{searchedMPRNDetails.postcode}</td>
                  </tr>
                </tbody>
          </table>
        </div>
        
      );

}

export default SearchResults;