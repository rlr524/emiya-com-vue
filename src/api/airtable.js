require("dotenv").config();
const Airtable = require("airtable");

Airtable.configure({
  endpointURL: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY
});

const clients = () => {
  let base = new Airtable.base("app2QSVu0tIIQirbK");

  base("Clients")
    .select({
      // Selecting the first three records of all clients: by employees
      maxRecords: 3,
      view: "All companies: by employees"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function "page" will get called for each page of records
        records.forEach(function(record) {
          console.log("Retrieved", record.get("Company"));
        });
        // To fetch the next page of records, call "fetchNextPage"
        // If there are more records, "page" will get called again
        // If there are no more records, "done" will get called

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};

module.exports = clients;
