import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project" id="about">
      <h2 className="project__subtitle subtitle">О проекте</h2>

      <article className="two-columns">
        <div className="project-content">
          <h3 className="project-content__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project-content__description text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="project-content">
          <h3 className="project-content__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project-content__description text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>

      <div className="project-levels">
        <div className="time-cell time-cell_blue">
          <p className="time-cell__text text">1 неделя</p>
        </div>
        <div className="time-cell time-cell_grey">
          <p className="time-cell__text text">4 недели</p>
        </div>
        <p className="project-levels__name text">Back-end</p>
        <p className="project-levels__name text">Front-end</p>
      </div>

      <div className="timeline"></div>
    </section>
  );
}

export default AboutProject;
