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
            return responsePayload;
          });
      } catch (error) {
        console.error(error);
      }
}

async function getFeaturedNewsItems() {
  try {
      const response = await fetch("https://hull-city-council.github.io/featured-news-flat-data/featured-news.json", {
          method: "GET"
      });
      const data = await response.json();
      return data[0].news_items[0];
  } catch (error) {
      console.error(error);
      return null;
  }
}

async function SubscribeToCollectionEmails(form, uprn, ucrn) {
  try {
    return await fetch("/apibroker/?api=RunLookup&app_name=AchieveForms&id=67c9d29ad8d54&sid=" + sid, {
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
          email: form.email,
          send_at: form.send_at,
          send_on: form.send_on,
          uprn: uprn,
          ucrn: ucrn
        }
      })
    })
      .then(response => response.json())
      .then(data => {
        let responsePayload = JSON.parse(data.integration.transformed.rows_data[0].response);
        console.log(responsePayload);
        return responsePayload;
      });
  } catch (error) {
    console.error(error);
  }
}

export { getUpcomingBinCollections, getFeaturedNewsItems, SubscribeToCollectionEmails }