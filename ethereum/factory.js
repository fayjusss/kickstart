import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x68985087853CdcE0e1d1153F748A58d401823CB2'  
);

export default instance;