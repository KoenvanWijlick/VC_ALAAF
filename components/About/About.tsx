"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./About.module.css";

export default function About() {
  const { t } = useTranslation();

  const paragraph = t("about.paragraph", "")
    .split("\n")
    .map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <section id="about" className={classes.wrapper}>
      <div className={classes.inner}>
        {/* Left – photo */}
        <div className={classes.photoWrap}>
          <img
            src="/images/wagen_2025_2.png"
            alt="VC AL-AAF Carnival Group"
          />
        </div>

        {/* Right – introduction */}
        <article className={classes.content}>
          <h2 className={classes.heading}>{t("about.heading", "Over Ons")}</h2>
          <p className={classes.paragraph}>
            {paragraph.length > 0 ? (
              paragraph
            ) : (
              <>
                VC AL-AAF is een enthousiaste carnavalsvereniging uit Limburg die
                al jaren met passie en creativiteit prachtige wagens bouwt voor de
                carnavalsoptocht.
                <br />
                <br />
                Elk jaar verzamelen we een toegewijd team van vrijwilligers die
                maandenlang werken aan een spectaculair kunstwerk op wielen. Van het
                eerste ontwerp tot de laatste verfstreek - alles wordt met liefde
                en aandacht voor detail gemaakt.
                <br />
                <br />
                Wil jij onderdeel worden van deze geweldige traditie? Word sponsor
                en help ons om ook in 2026 weer een onvergetelijke wagen te bouwen!
              </>
            )}
          </p>
        </article>
      </div>
    </section>
  );
}
