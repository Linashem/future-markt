import { useEffect, useState } from "react";
import style from "./Info.module.scss";
import { dateSum } from "../../helper/constants/date";
import { fetchCurrentGBP } from "../../helper/api/fetchCurrentGBP";
import { InfoCard } from "../../Components/InfoCard/InfoCard";

export const Info = () => {
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    const getCurrentGBP = async () => {
      const value = await fetchCurrentGBP();
      setData(value);
    };

    getCurrentGBP();
  }, []);

  if (!data) {
    return <div>Loading data...</div>;
  }

  const gbp = Math.round(data);

  return (
    <div className={style.info}>
      <div className={style.info_wrapper}>
        <InfoCard
          title={`${dateSum}+`}
          text={"техник для достижения целей"}
          textMobile={"техники"}
        />
        <InfoCard
          title={`${gbp}%`}
          text={"увеличение личной продуктивности"}
          textMobile={"продуктивности"}
        />
      </div>
    </div>
  );
};
