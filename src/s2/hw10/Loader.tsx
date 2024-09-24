import s from "./Loader.module.css";
import srcImg from "./loading.png";

export const Loader = () => <img className={s.loader} src={srcImg} alt='loading' />;
