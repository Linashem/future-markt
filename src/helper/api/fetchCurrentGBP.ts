import axios from "axios";

export const fetchCurrentGBP = async () => {
    try {
      const response = await axios.get(
        "https://www.cbr-xml-daily.ru/daily_json.js"
      );
      const gbpValue = response.data.Valute.GBP.Value;
      return gbpValue
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };