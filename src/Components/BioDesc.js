import css from "../Styles/People.module.css";

function BioDesc({
  name, imgUrl, desc, specialty
}) {
  return (
    <div className={css.bioContainer}>

      <div className={css.flex5}>
        <img src={imgUrl} className={css.bioPhoto} />
      </div>

      <div className={css.flex7}>
        <h1 className={css.title}>
          {name}
        </h1>
        <p className={css.specialty}>
          <b>Specialty:</b> {specialty}
        </p>
        <p className={css.desc}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default BioDesc;