import s from './linearLoader.module.scss'

export const LinearLoader = () => {
    return <div  className={s.loaderContainer}>
        <div className={s.loader}></div>
    </div>

}