const {Client} = require("pg")
const client = new Client({
  user: 'redcat',
  host: '203.185.67.58',
  database: 'dbhighmap_example',
  password: 'std12345',
  port: 5432,
})

start()
async function start(){
    await connect();
    const thai = await readThai();
    console.log(thai)
}
async function connect(){
    try{
      await pool.connect();
    }
    catch(e){
      console.error('Failed to connect ${e}')
    }
  }