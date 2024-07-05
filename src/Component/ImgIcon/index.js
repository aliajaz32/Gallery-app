export default function ImgIcon(props){
    return <img onClick={ ()=> props.changeImage(props.src)} width="50" height="50"src={props.src} alt="" />
}