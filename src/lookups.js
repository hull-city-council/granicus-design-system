async function getUpcomingBinCollections(sid, uprn) {
    try {
        return await fetch("/apibroker/?api=RunLookup&app_name=AchieveForms&id=67c6dc093cf30&sid=" + sid, {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            formValues: {
              Section1: {}
            },
            tokens: {
              uprn: uprn,
            }
          })
        })
          .then(response => response.json())
          .then(data => {
            let responsePayload = JSON.parse(data.integration.transformed.rows_data[0].response);
            console.log(responsePayload);
            return responsePayload.data;
          });
      } catch (error) {
        console.error(error);
      }
}

export { getUpcomingBinCollections }