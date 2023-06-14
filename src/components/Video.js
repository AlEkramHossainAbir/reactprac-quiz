import classes from "../styles/Video.module.css";

export default function Video({ title, id, noq, key }) {
  return (
    <div className={classes.video}>
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq}</p>
        <p>Total Points : {noq * 5}</p>
      </div>
    </div>
  );
}
