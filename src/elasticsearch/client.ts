const { Client } = require('@opensearch-project/opensearch');
import config from 'config';

const elasticConfig : any = config.get('elastic');

// const client = new Client({
//   cloud: {
//     id: elasticConfig.cloudID,
//   },
//   auth: {
//     username: elasticConfig.username,
//     password: elasticConfig.password,
//   },
//   });
const client = new Client({
  node: "https://vpc-dev-blue-oflow-tpvv4jz5oshcasjk5d3ahnscwa.us-east-1.es.amazonaws.com",
  auth: {
    username: "admin",
    password: "]bN2FIx(^CSA&C"
  }
});

(async () => {
  try {
    const response = await client.info();
    console.log("Elasticsearch Info:", response);
  } catch (error) {
    console.error("Error:", error);
  }
})();
  

// client.ping()
//   .then(() => console.log("You are connected to Elasticsearch!"))
//   .catch((error) => console.error("Elasticsearch is not connected.", error));

export default client;
