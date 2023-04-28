import React from "react";
import HeroTitle from "../base/HeroTitle";
import Catalog from "./Catalog";

const Performance = ({ strings }) => {
  const stringsAchievement = strings.achievement;

  return (
    <>
      <HeroTitle title={strings.performance} />
      <section className="grid grid--achievement">
        <div className="autoContainer">
          <div className="grid__inner">
            <div className="grid__inner-header">
              <h2>{stringsAchievement.title}</h2>
              <p>{stringsAchievement.paragraph}</p>
            </div>
            <div className="grid__inner-row">
              <div className="gridItem">
                <h3>{stringsAchievement["item-1"].title}</h3>
                <p>{stringsAchievement["item-1"].paragraph}</p>
              </div>

              <div className="gridItem">
                <h3>{stringsAchievement["item-2"].title}</h3>
                <p>{stringsAchievement["item-2"].paragraph}</p>
              </div>

              <div className="gridItem">
                <h3>{stringsAchievement["item-3"].title}</h3>
                <p>{stringsAchievement["item-3"].paragraph}</p>
              </div>

              <div className="gridItem">
                <h3>{stringsAchievement["item-4"].title}</h3>
                <p>{stringsAchievement["item-4"].paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Catalog strings={strings.selectionInvestment} />
    </>
  );
};

export default Performance;
